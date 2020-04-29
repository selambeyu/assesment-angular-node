"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require("validator");
var isEmpty = require("./is-empty");
var validateMessagedata = /** @class */ (function () {
    function validateMessagedata() {
    }
    return validateMessagedata;
}());
exports.validateMessagedata = validateMessagedata;
(function (data) {
    var errors = {};
    data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
    data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    if (validator.isEmpty(data.firstname)) {
        errors.firstname = "fistname is required";
    }
    if (validator.isEmpty(data.lastname)) {
        errors.lastname = "lastname is required";
    }
    if (validator.isEmpty(data.email)) {
        errors.email = "email is required";
    }
    if (!validator.isEmail(data.email)) {
        errors.email = "email is invalid";
    }
    return {
        errors: errors,
        isValid: isEmpty(errors)
    };
});
//# sourceMappingURL=message-validation.js.map