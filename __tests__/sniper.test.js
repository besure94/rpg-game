import { Sniper } from '../src/js/sniper.js';

describe('Sniper', () => {
  let sniper;

  beforeEach(() => {
    sniper = new Sniper();
  });

  test('should create a sniper object with five properties, with each property being a 0', () => {
    expect(sniper.speed).toEqual(0);
    expect(sniper.strength).toEqual(0);
    expect(sniper.stealth).toEqual(0);
    expect(sniper.accuracy).toEqual(0);
    expect(sniper.speech).toEqual(0);
  });
  test('should contain a method to create a name that the user can enter', () => {
    sniper.assignName("Deadeye");
    expect(sniper.name).toEqual("Deadeye");
  });
});