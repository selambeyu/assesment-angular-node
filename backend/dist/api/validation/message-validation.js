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
var validator_1 = __importDefault(require("validator"));
var isEmpty = __importStar(require("./is-empty"));
var validateMessagedata = /** @class */ (function () {
    function validateMessagedata() {
    }
    return validateMessagedata;
}());
(function (data) {
    var errors = {};
    data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
    data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    if (validator_1.default.isEmpty(data.firstname)) {
        errors.firstname = "fistname is required";
    }
    if (validator_1.default.isEmpty(data.lastname)) {
        errors.lastname = "lastname is required";
    }
    if (validator_1.default.isEmpty(data.email)) {
        errors.email = "email is required";
    }
    if (!validator_1.default.isEmail(data.email)) {
        errors.email = "email is invalid";
    }
    return {
        errors: errors,
        isValid: isEmpty(errors)
    };
});
//# sourceMappingURL=message-validation.js.map