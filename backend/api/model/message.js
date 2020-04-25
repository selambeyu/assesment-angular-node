const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone_no: Number,
  message: String
});
module.exports = mongoose.model("message", MessageSchema);
