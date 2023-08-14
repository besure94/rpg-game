import { Raider } from '../src/js/raider.js';

describe('Raider', () => {
  let raider;

  beforeEach(() => {
    raider = new Raider();
  });

  test('should create a raider object with ten properties, with each property being 0', () => {
    expect(raider.speed).toEqual(0);
    expect(raider.strength).toEqual(0);
    expect(raider.stealth).toEqual(0);
    expect(raider.accuracy).toEqual(0);
    expect(raider.speech).toEqual(0);
    expect(raider.heavyWeapons).toEqual(0);
    expect(raider.lightWeapons).toEqual(0);
    expect(raider.intelligence).toEqual(0);
    expect(raider.melee).toEqual(0);
    expect(raider.healing).toEqual(0);
  });
  test('should contain a method to create a name that the user can enter', () => {
    raider.assignName("Popeye");
    expect(raider.name).toEqual("Popeye");
  });
  test('should contain a method that will assign a number between 1 and 5 to each property', () => {
    raider.assignNumbers(4, 4, 2, 2, 4, 3, 4, 2, 5, 2);
    expect(raider.speed).toEqual(4);
    expect(raider.strength).toEqual(4);
    expect(raider.stealth).toEqual(2);
    expect(raider.accuracy).toEqual(2);
    expect(raider.speech).toEqual(4);
    expect(raider.heavyWeapons).toEqual(3);
    expect(raider.lightWeapons).toEqual(4);
    expect(raider.intelligence).toEqual(2);
    expect(raider.melee).toEqual(5);
    expect(raider.healing).toEqual(2);
  });
});