"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
// const router = express.Router();
// const validateMessage = require("../validation/is-empty");
var validateMessage = __importStar(require("../validation/message-validation.ts"));
// const validateMessage = require("../validation/message-validation");
var Message = require("../model/message");
module.exports.submitMessage = function (req, res) {
    var _a = validateMessage(req.body), errors = _a.errors, isValid = _a.isValid;
    if (!isValid) {
        return res.status(400).json(errors);
    }
    var message = new Message({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone_no: req.body.phone_no,
        message: req.body.message
    });
    if (!message) {
        console.log("fill the form");
    }
    //   let product = new Product(req.body);
    message
        .save()
        .then(function (message) {
        res.status(200).json({ message: "message has been added successfully" });
    })
        .catch(function (err) {
        res.status(400).send("unable to save to database");
    });
};
//# sourceMappingURL=message.js.map