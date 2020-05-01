"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Logic
var Grid = __importStar(require("gridfs-stream"));
var mongoose = __importStar(require("mongoose"));
//models
var message_1 = __importDefault(require("../../model/message"));
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.prototype.routes = function (router) {
        var conn = mongoose.connection;
        Grid.mongo = mongoose.mongo;
        var gfs;
        conn.once("open", function () {
            gfs = Grid(conn.db);
            router.get("/submit-message", function (req, res) {
                // let { errors, isValid } = validateMessage(req.body);
                // if (!isValid) {
                //   return res.status(400).json(errors);
                // }
                var message = new message_1.default({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    phone_no: req.body.phone_no,
                    message: req.body.message
                });
                if (!message) {
                    console.log("fill the form");
                }
                //   let product = new Product(req.body);
                message
                    .save()
                    .then(function (message) {
                    res
                        .status(200)
                        .json({ message: "message has been added successfully" });
                })
                    .catch(function (err) {
                    res.status(400).send("unable to save to database");
                });
            });
        });
    };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.js.map