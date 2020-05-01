"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var router = express.Router();
// Controller/Routes Managers.
var message_1 = require("./message/message");
// Creating new Routes Instances.
var downloaderRoutes = new message_1.Message();
// Registering our Routes.
downloaderRoutes.routes(router);
exports.default = router;
//# sourceMappingURL=index.js.map