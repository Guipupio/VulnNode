const express = require('express');
const router = express.Router();
const database = require('../database/databaseConnection');

router.get('/', function (req, res, next) {
    const username = req.query.username;
    const accessToken = req.query['access-token'];

    const queryString = `SELECT * FROM matabase WHERE username='${username}' AND access_token='${accessToken}';`

    database.query(queryString, (err, rows, fields) => {
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
    const userId = req.query.userId;
    const resourceId = req.query.resourceId;
    const userAccessCheck = req.query.userAccessCheck;

    try {
        const hasAccess = eval(`(${userAccessCheck})(${userId}, ${resourceId})`);
        res.send(`User ${userId} has access to ${resourceId}: ${hasAccess}`);
    } catch (error) {
        res.status(500).send('Error checking user access');
    }
});

module.exports = router;
