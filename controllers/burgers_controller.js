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
router.post("/api/burgers/create", function (req, res) {
    console.log('this route is hit')
    burger.addOne (req.body.burger_name, function (result) {
        console.log(result);
        //res.redirect("");
    });

});

router.put ("/api/burgers/:id", function (req, res) {
    var condition = "id =" + req.params.id;
    console.log ("condition", condition);

    burger.updateOne({ devoured: req.body.devoured }, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
router.delete ("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log ("condition, condition");

    burger.delete (condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status (200).end();
        }
    }
    );
});

module.exports = router;