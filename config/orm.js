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
        //Make quotation marks for any phrases with spaces
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
    }
}    
return arr.toString();
}

//Here we can see all the burgers that are in the db
var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err,result) {
            if (err) {
                throw err;
            }
            cb(result);
        }
        );
    },
    //Make your burger
    addOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err
            }
        }
        )
    }
    