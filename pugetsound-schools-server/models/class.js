"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var ClassSchema = new mongoose_1.Schema({
    classname: { type: String, required: true },
    subject: { type: String, required: true },
    teacher: { type: Number, required: true },
    students: {
        type: [{ student: mongoose_1.Schema.Types.ObjectId, grade: String }],
        required: true,
        minLength: 2
    },
    assignments: { type: [mongoose_1.Schema.Types.ObjectId], "default": [] }
});
exports["default"] = mongoose.model('Class', ClassSchema);
