const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printCrew(crewList) {
    if (crewList.length === 0) return Console.print('크루가 없습니다.');
    Console.print(crewList);
  },
};

module.exports = OutputView;
