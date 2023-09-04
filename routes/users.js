const express = require('express');
const xss = require("xss")

const router = express.Router();

const database = require('../database/databaseConnection');
const user_access_check = require("../utils/utils");


router.get('/', function (req, res, next) {
    const username = req.query.username;
    const accessToken = req.query['access-token'];

    const queryString = `SELECT * FROM users WHERE username=? AND access_token=?;`
    
    database.query(queryString, [username, accessToken], (err, rows, ) => {
        if (err) {
            console.log('Failed to query for users: ' + err);
            res.sendStatus(500);
            res.end();
            return;
        }
        
        console.log('I think we fetched users successfully');

        res.json(rows);
    });
});

router.get('/has-access', (req, res) => {
    // Uma vez que vamos devolver o userId e resourceId recebido pelo usuário
    // Estamos adicionando um controle para evitar um XSS
    const userId = xss(req.query.userId);
    const resourceId = xss(req.query.resourceId);

    
    try {
        // Dependendo do contexto da aplicaçao poderiamos garantir que esses Ids
        // Sejam numéricos e retornamos um erro 400 caso nao sejam.
        if(isNaN(userId) || isNaN(resourceId)){
            res.status(400).send("BAD REQUEST! Something is wrong with the parameters.")
        }
        else {
            const hasAccess = user_access_check(userId, resourceId)
    
            const message = hasAccess ? "Success!" : "Fail!"

            res.send(`User ${userId} access to resource ${resourceId}: ${message}`);
        }
    } catch (error) {
        res.status(500).send('Error checking user access');
    }
});

module.exports = router;
