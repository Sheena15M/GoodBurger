var express = require ("express");
var router = express.Router();
var burger = require ("../models/burger.js");

//Routes and Index direction
router.get("/", function (req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log (hbsObject);
        res.render ("index", hbsObject);
    });
});

//Burger making station
router.post("/burger/create", function (req, res) {
    burger.create (req.body.burger_name, function (result) {
        console.log(result);
        res.redirect("");
    });

});

router.put ("/burger/:id", function (req, res) {
    var condition = "id =" + req.params.id;
    console.log ("condition", condition);

    burger.updateOne({ devoured: req.body.devoured }, condition, function (result))
}
)