"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// const express = require("express");
// const app = express();
// const path = require('path'),
var body_parser_1 = require("body-parser");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");
var PORT = 8000;
// import messageRouter from "./api/routes/message,";
var message_ts_1 = require("./api/routes/message.ts");
// const messageRouter = require("./api/routes/message");
// import * as db from "./api/config/dbconnection";
// const db = require("./api/config/dbconnection");
express_1.app.use(body_parser_1.bodyParser.urlencoded({ extended: false }));
express_1.app.use(body_parser_1.bodyParser.json());
express_1.app.use("/api", message_ts_1.messageRouter);
express_1.app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
express_1.app.get("/", function (req, res) {
    res.send("app is running");
});
express_1.app.listen(PORT, function () {
    return console.log("app listening at http://localhost:" + PORT);
});
//# sourceMappingURL=server.js.map