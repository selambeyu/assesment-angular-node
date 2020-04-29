// const express = require("express");
// const router = express.Router();
import express from "express";
import router = express.Router;
const messagController = require("../controller/message");

router.get("/message", (req, res) => {});

router.post("/submit-message", messagController.submitMessage);
module.exports = router;
