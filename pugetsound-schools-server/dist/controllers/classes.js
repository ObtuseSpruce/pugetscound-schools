"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Router will 'use' assignments
var express_1 = require("express");
var db = require('../models');
var router = express_1.Router();
//router.use('/:classname/assignments', require('./assignments'))
// POST a new class
router.post('/', function (req, res) {
    db.Class.create(req.body)
        .then(function (c) {
        res.send(c);
    })
        .catch(function (err) {
        console.log("Error:", err);
    });
});
// GET a class by ID
router.get('/:id', function (req, res) {
    db.Class.findOne({ _id: req.params.id })
        .then(function (c) {
        res.send(c);
    })
        .catch(function (err) {
        console.log("Error:", err);
    });
});
// PUT updated info into a class by ID
router.put('/:id', function (req, res) {
    db.Class.findOneAndUpdate({ _id: req.params.id }, req.body);
});
// GET all classes for a specified student
router.get('/student/:id', function (req, res) {
});
// GET all classes for a specified teacher
router.get('/teacher/:id', function (req, res) {
});
module.exports = router;
