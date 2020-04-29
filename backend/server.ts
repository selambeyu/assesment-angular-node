import { express } from "express";
import { app } from "express";
// const express = require("express");
// const app = express();

// const path = require('path'),
import { bodyParser } from "body-parser";
import { cors } from "cors";
import { mongoose } from "mongoose";

// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");
const PORT = 8000;
// import messageRouter from "./api/routes/message,";
import * as messageRouter from "./api/routes/message";
// const messageRouter = require("./api/routes/message");
// import * as db from "./api/config/dbconnection";
// const db = require("./api/config/dbconnection");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", messageRouter);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.get("/", (req, res) => {
  res.send("app is running");
});

app.listen(PORT, () =>
  console.log(`app listening at http://localhost:${PORT}`)
);
