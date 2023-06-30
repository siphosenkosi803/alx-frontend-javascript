import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // floor dimensions	
  get floors() {
    return (this._floors);
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}

export default SkyHighBuilding
