const TeamMatchingController = require('./TeamMatchingController');

class App {
  constructor() {
    this.teamMatchingController = new TeamMatchingController();
  }

  play() {
    this.teamMatchingController.start();
  }
}

module.exports = App;
