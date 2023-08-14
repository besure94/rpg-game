import { Sniper } from '../src/js/sniper.js';

describe('Sniper', () => {
  let sniper;

  beforeEach(() => {
    sniper = new Sniper();
  });

  test('should create a sniper object with ten properties, with each property being a 0', () => {
    expect(sniper.speed).toEqual(0);
    expect(sniper.strength).toEqual(0);
    expect(sniper.stealth).toEqual(0);
    expect(sniper.accuracy).toEqual(0);
    expect(sniper.speech).toEqual(0);
    expect(sniper.heavyWeapons).toEqual(0);
    expect(sniper.lightWeapons).toEqual(0);
    expect(sniper.intelligence).toEqual(0);
    expect(sniper.melee).toEqual(0);
    expect(sniper.healing).toEqual(0);
  });
  test('should contain a method to create a name that the user can enter', () => {
    sniper.assignName("Deadeye");
    expect(sniper.name).toEqual("Deadeye");
  });
  test('should contain a method that will assign a number between 1 and 5 to each property', () => {
    sniper.assignNumbers(3, 2, 4, 5, 2, 2, 4, 4, 1, 2);
    expect(sniper.speed).toEqual(3);
    expect(sniper.strength).toEqual(2);
    expect(sniper.stealth).toEqual(4);
    expect(sniper.accuracy).toEqual(5);
    expect(sniper.speech).toEqual(2);
    expect(sniper.heavyWeapons).toEqual(2);
    expect(sniper.lightWeapons).toEqual(4);
    expect(sniper.intelligence).toEqual(4);
    expect(sniper.melee).toEqual(1);
    expect(sniper.healing).toEqual(2);
  });
});