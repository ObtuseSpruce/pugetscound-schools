"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/school');
module.exports.Class = require('./class');
module.exports.User = require('./user');
module.exports.Assignement = require('./assignment');
