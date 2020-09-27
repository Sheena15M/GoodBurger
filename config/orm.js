//Connect to MySQL
var connection = require ("../config/connection.js");

//ORM saves things to the database and helps MySQL
function printQuestionMarks(num) {
    var arr = [];
    
    for (var i = 0; i < num; i++) {
    }

    return arr.toString();
}

//Convert objects key pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

//For loop the keys
for (var key in ob) {
    var value = ob [key];
    if (Object.hasOwnProperty.call(ob,key)){
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
    }
}    
}