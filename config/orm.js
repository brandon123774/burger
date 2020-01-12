// Importmysql
var connection = require("../config/connection.js");

//pass values using question marks to write queries
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }