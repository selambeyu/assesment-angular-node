const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone_no: {
    type: Number
  },
  message: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("message", MessageSchema);
