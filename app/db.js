var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.1',
    user: 'root',
    password: 'root_12345',
    database: 'mydb'
});
module.exports = connection;