import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone_no: Number,
  message: String
});
const MessageModel = model("message", MessageSchema);
export default MessageModel;
