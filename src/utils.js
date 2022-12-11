const { Console } = require('@woowacourse/mission-utils');

const throwError = (message) => {
  Console.print(message);
  throw new Error();
};

module.exports = {
  throwError,
};
