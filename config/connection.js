// connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "thh2lzgakldp794r.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "p4714g93gmhlsfjn",
    password: "ohnser7hujuqqqjl",
    database: "v92b75sw8x50ggoy"
});

// Make connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
