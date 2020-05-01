"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_config_1 = __importDefault(require("./api/config/express.config"));
var config = __importStar(require("./api/config/config.json"));
express_config_1.default.listen(config.port, function () {
    console.log("[*] Listening on port " + config.port + " ..");
});
//# sourceMappingURL=server.js.map