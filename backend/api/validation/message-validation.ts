import { stringify } from "querystring";



import validator from "validator"
import * as isEmpty from "./is-empty"

class validateMessagedata(data:any) {
  let errors: any = {};

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
