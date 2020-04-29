"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
// const router = express.Router();
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router;
var messagController = require("../controller/message");
router.get("/message", function (req, res) { });
router.post("/submit-message", messagController.submitMessage);
module.exports = router;
//# sourceMappingURL=message.js.map