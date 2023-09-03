const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'db',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT || 3306
});

connection.connect(function (err) {
    if (err) {
        console.log('Error connecting to Db' + err.stack);
        return;
    }
    console.log('Connection established' + connection.threadId);
});

module.exports = connection;
