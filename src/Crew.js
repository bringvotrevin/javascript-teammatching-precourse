const { INPUT } = require('./constants');

class Crew {
  #field;

  #list;

  constructor(field) {
    this.#field = field;
    this.#list = [];
  }

  getField() {
    return this.#field;
  }

  getList() {
    return this.#list;
  }

  act(action, name) {
    if (action === INPUT.ADD) this.addCrew(name);
    else if (action === INPUT.DELETE) this.deleteCrew(name);
  }

  addCrew(name) {
    this.#list.push(name);
  }

  deleteCrew(name) {
    const index = this.#list.indexOf(name);
    if (index > -1) this.#list.splice(index, 1);
  }
}

module.exports = Crew;
