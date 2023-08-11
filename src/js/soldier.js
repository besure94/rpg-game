export class Soldier {
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

  assignNumbers(speedAttr, strengthAttr, stealthAttr, accuracyAttr, speechAttr) {
    this.speed = speedAttr;
    this.strength = strengthAttr;
    this.stealth = stealthAttr;
    this.accuracy = accuracyAttr;
    this.speech = speechAttr;
  }
}