"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var MessageSchema = new mongoose_1.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone_no: Number,
    message: String
});
var MessageModel = mongoose_1.model("message", MessageSchema);
exports.default = MessageModel;
//# sourceMappingURL=message.js.map