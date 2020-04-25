const express = require("express");
const router = express.Router();
const validateMessage = require("../../validation/message-validation");
const Message = require("../model/message");

router.get("/message", (req, res) => {});

router.post("/submit-message", (req, res) => {
  const { errors, isValid } = validateMessage(req.body);
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
});
module.exports = router;
