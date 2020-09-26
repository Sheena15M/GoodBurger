var mysql = require ("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "Nijm8418",
    database:"goodburger_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return:
    }
    console.log("connected as id " + connection.threadID);
});