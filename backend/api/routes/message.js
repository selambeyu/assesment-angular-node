const express = require("express");
const router = express.Router();
const validateMessage = require("../../validation/message-validation");
const messageModel = require("../model/message");

router.get("/message", (req, res) => {});

router.post("/submit-message", (req, res) => {
  const { errors, isValid } = validateMessage(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newMessage = new messageModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone_no: req.body.phone_no,
    message: req.body.message
  });
  newMessage
    .save()
    .then(message => res.json(message))
    .catch(err => console.log(err));
});
module.exports = router;
