"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const validateMessage = require("../validation/message-validation");
var message_1 = __importDefault(require("../model/message"));
// const Message = require("../model/message");
module.exports.submitMessage = function (req, res) {
    // let { errors, isValid } = validateMessage(req.body);
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }
    var message = new message_1.default({
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