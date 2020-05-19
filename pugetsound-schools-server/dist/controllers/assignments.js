"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var db = require('../models');
//let router = require('express').Router()
var router = express_1.Router();
// POST a new assignemtn to a class
router.post('/class/:classId', function (req, res) {
});
// GET all assignments for a class
router.get('/class/:classId', function (req, res) {
});
// GET all assignments for a student
router.get('/student/:studentId', function (req, res) {
});
// GET an assignment by id
router.post('/:id', function (req, res) {
});
module.exports = router;
