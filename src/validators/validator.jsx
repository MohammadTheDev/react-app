import rules from "./rules";
import regex from "./regex";

const validator = (value, validations) => {
  let validationsResults = [];

  for (const validator of validations) {
    if (validator.value === rules.requiredValue) {
      value.trim().length === 0 && validationsResults.push(false);
    }
    if (validator.value === rules.minValue) {
      value.trim().length < validator.min && validationsResults.push(false);
    }
    if (validator.value === rules.maxValue) {
      value.trim().length > validator.max && validationsResults.push(false);
    }
    if (validator.value === rules.emailValue) {
      !regex.testEmail(value) && validationsResults.push(false);
    }
  }

  if (validationsResults.length) {
    return false;
  } else {
    return true;
  }
};

export default validator;
