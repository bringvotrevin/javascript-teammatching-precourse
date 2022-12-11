const { Console } = require('@woowacourse/mission-utils');
const { READ } = require('./constants');
const { validateManagement, validateField, validateAction } = require('./Validate');

const InputView = {
  readManagement(callback) {
    Console.readLine(READ.CREW_OR_TEAM, (input) => {
      try {
        validateManagement(input);
        callback(input);
      } catch (error) {
        Console.print(error);
        this.readManagement(callback);
      }
    });
  },

  readField(callback) {
    Console.readLine(READ.FIELD, (input) => {
      try {
        validateField(input);
        callback(input);
      } catch (error) {
        Console.print(error);
        this.readField(callback);
      }
    });
  },

  readCrewAction(callback) {
    Console.readLine(READ.ACTION, (input) => {
      try {
        validateAction(input);
        callback(input);
      } catch (error) {
        Console.print(error);
        this.readCrewAction(callback);
      }
    });
  },

  readCrewName(callback) {
    Console.readLine(READ.NAME, (input) => {
      try {
        callback(input);
      } catch (error) {
        Console.print(error);
        this.readCrewName(callback);
      }
    });
  },
};

module.exports = InputView;
