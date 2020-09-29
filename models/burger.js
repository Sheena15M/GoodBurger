//Start by having the ORM come in
var orm = require("../config/orm.js");

//Now specifically call ORM functions using the burger variable
var burger ={
    all: function(cb) {
        orm.all("burgers", function(res){
            cb(res);
        }
        );
    },
    //Create the burgers in the database aka db
    addOne: function (cols, vals, cb) {
        orm.addOne("burgers", cols, vals, function(res) {
            cb(res);
        }
        );
    },
    //Once devoured, make it true
    changeOne: function (objColVals, condition, cb){
        orm.changeOne("burgers", objColVals,condition, function(res){
            cb(res);
        });
    },
    //Done eating, throw it away
    deleteOne: function(condition, cb){
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        }
        );
    }
};
//Don't forget to export
module.exports = burger;