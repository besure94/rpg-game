export class Medic {
  constructor() {
    this.speed = 0;
    this.strength = 0;
    this.stealth = 0;
    this.accuracy = 0;
    this.speech = 0;
    this.heavyWeapons = 0;
    this.lightWeapons = 0;
    this.intelligence = 0;
    this.melee = 0;
    this.healing = 0;
    this.name = "";
  }

  assignName(playerName) {
    this.name = playerName;
  }

  assignNumbers(speedAttr, strengthAttr, stealthAttr, accuracyAttr, speechAttr, heavyAttr, lightAttr, intelAttr, meleeAttr, healingAttr) {
    this.speed = speedAttr;
    this.strength = strengthAttr;
    this.stealth = stealthAttr;
    this.accuracy = accuracyAttr;
    this.speech = speechAttr;
    this.heavyWeapons = heavyAttr;
    this.lightWeapons = lightAttr;
    this.intelligence = intelAttr;
    this.melee = meleeAttr;
    this.healing = healingAttr;
  }
}