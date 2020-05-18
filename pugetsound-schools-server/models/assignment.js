"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var AssignmentSchema = new mongoose_1.Schema({
    "class": { type: mongoose_1.Schema.Types.ObjectId, required: true },
    teacher: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    students: { type: [{ id: mongoose_1.Schema.Types.ObjectId, grade: String }], required: true },
    dateAssigned: { type: Date, "default": null },
    dateDue: { type: Date, "default": null }
});
exports["default"] = mongoose.model('User', AssignmentSchema);
