const { FIELD } = require('./constants');
const Crew = require('./Crew');

class CrewManagement {
  #crewList;

  #field;

  #action;

  #name;

  constructor() {
    this.#crewList = [FIELD.FRONT, FIELD.BACK].map((field) => new Crew(field));
  }

  getCrewList() {
    let list;
    this.#crewList.forEach((crew) => {
      if (crew.getField() === this.#field) { list = crew.getList(); }
    });
    return list;
  }

  setField(field) {
    this.#field = field;
  }

  setAction(action) {
    this.#action = action;
  }

  setName(name) {
    this.#name = name;
  }

  doAction() {
    this.#crewList.forEach((crew) => {
      if (crew.getField() === this.#field) crew.act(this.#action, this.#name);
    });
  }
}

module.exports = CrewManagement;
