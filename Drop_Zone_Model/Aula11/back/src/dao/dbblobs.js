const mysql = require("mysql2");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'blobs'
});

module.exports = con;