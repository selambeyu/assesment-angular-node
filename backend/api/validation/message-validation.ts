const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateMessagedata(data) {
  let errors = {};

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
    errors,
    isValid: isEmpty(errors)
  };
};
