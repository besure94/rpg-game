export class Sniper {
  constructor() {
    this.speed = 0;
    this.strength = 0;
    this.stealth = 0;
    this.accuracy = 0;
    this.speech = 0;
    this.name = "";
  }

  assignName(playerName) {
    this.name = playerName;
  }
}