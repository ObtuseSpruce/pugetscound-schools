"use strict";
// Router will 'use' assignments
var router = require('express').Router();
router.use('/:classname/assignments', require('./assignments'));
// POST a new class
// GET 
