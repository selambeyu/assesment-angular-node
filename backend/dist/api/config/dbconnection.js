"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
// var mongoose = require("mongoose");
var URL = process.env.URL || "mongodb://localhost/DB";
mongoose_1.default.set("useCreateIndex", true);
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose_1.default.connection;
db.on("error", function () {
    console.error("Erroo occured in db connection");
});
db.on("open", function () {
    console.log("Db connection established successfully");
});
module.exports = db;
//# sourceMappingURL=dbconnection.js.map