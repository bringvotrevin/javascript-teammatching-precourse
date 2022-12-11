const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { INPUT } = require('./constants');
const CrewManagement = require('./CrewManagement');

class TeamMatchingController {
  constructor() {
    this.crewManagement = new CrewManagement();
  }

  start() {
    InputView.readManagement(this.chooseCrewOrTeamManagement.bind(this));
  }

  chooseCrewOrTeamManagement(input) {
    if (input === INPUT.CREW) this.crewManaging();
    else this.teamManaging();
  }

  crewManaging() {
    InputView.readField(this.fieldInput.bind(this));
  }

  fieldInput(field) {
    this.crewManagement.setField(field);
    OutputView.printCrew(this.crewManagement.getCrewList());
    InputView.readCrewAction(this.crewActionInput.bind(this));
  }

  crewActionInput(action) {
    this.crewManagement.setAction(action);
    InputView.readCrewName(this.addOrDeleteCrew.bind(this));
  }

  addOrDeleteCrew(name) {
    this.crewManagement.setName(name);
    this.crewManagement.doAction();
    OutputView.printCrew(this.crewManagement.getCrewList());
    this.start();
  }
}

module.exports = TeamMatchingController;
