// const express = require("express");
// const router = express.Router();
// const validateMessage = require("../validation/is-empty");
import * as validateMessage from "../validation/message-validation";
// const validateMessage = require("../validation/message-validation");
import Message from "../model/message";
// const Message = require("../model/message");

module.exports.submitMessage = (req, res) => {
  let { errors, isValid } = validateMessage(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const message = new Message({
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
    .then(message => {
      res.status(200).json({ message: "message has been added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
};
