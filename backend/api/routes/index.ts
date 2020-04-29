import * as express from "express";
let router = express.Router();

// Controller/Routes Managers.
import { Message } from "./message/message";

// Creating new Routes Instances.
const downloaderRoutes: Message = new Message();

// Registering our Routes.
downloaderRoutes.routes(router);

export default router;
