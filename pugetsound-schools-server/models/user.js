"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true
    },
    birthdate: { type: Date, "default": null },
    admin: { type: Boolean, "default": false },
    position: { type: String, required: true },
    grade: { type: String, "default": 'N/A' },
    classes: {
        type: [mongoose_1.Schema.Types.ObjectId],
        "default": []
    }
});
exports["default"] = mongoose.model('User', UserSchema);
