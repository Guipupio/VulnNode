const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'db',
    user: 'nodinho',
    password: 'rootinho',
    database: 'rooto',
    port: 3306
});

connection.connect(function (err) {
    if (err) {
        console.log('Error connecting to Db' + err.stack);
        return;
    }
    console.log('Connection established' + connection.threadId);
});

module.exports = connection;
