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
var config = __importStar(require("../config/config.json"));
// Logic
var express = __importStar(require("express"));
var mongoose = __importStar(require("mongoose"));
var morgan = __importStar(require("morgan"));
var busboyBodyParser = __importStar(require("body-parser"));
var routes_1 = __importDefault(require("../routes"));
var ExpressConfiguration = /** @class */ (function () {
    function ExpressConfiguration() {
        this.dbUrl = config.db;
        this.app = express();
        this.config();
        this.dbConnect();
    }
    ExpressConfiguration.prototype.dbConnect = function () {
        // mongoose.Promise = global.Promise;
        mongoose.connect(this.dbUrl);
    };
    ExpressConfiguration.prototype.config = function () {
        this.app.use(busboyBodyParser({ limit: "50mb" }));
        this.app.use(morgan("dev"));
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
            res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
            next();
        });
        this.app.use("/api", routes_1.default);
    };
    return ExpressConfiguration;
}());
exports.default = new ExpressConfiguration().app;
//# sourceMappingURL=express.config.js.map