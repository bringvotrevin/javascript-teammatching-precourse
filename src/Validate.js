const { INPUT, FIELD, ERROR } = require('./constants');
const { throwError } = require('./utils');

const validateManagement = (input) => {
  if (input !== INPUT.CREW && input !== INPUT.TEAM) {
    throwError(ERROR.MANAGEMENT);
  }
};

const validateField = (input) => {
  if (input !== FIELD.FRONT && input !== FIELD.BACK) {
    throwError(ERROR.FIELD);
  }
};

const validateAction = (input) => {
  if (input !== INPUT.ADD && input !== INPUT.DELETE) {
    throwError(ERROR.ACTION);
  }
};

module.exports = {
  validateManagement,
  validateField,
  validateAction,
};
