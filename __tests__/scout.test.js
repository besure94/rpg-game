import { Scout } from '../src/js/scout.js';

describe('Scout', () => {
  let scout;

  beforeEach(() => {
    scout = new Scout();
  });

  test('should create a scout object with ten properties, with each property being a 0', () => {
    expect(scout.speed).toEqual(0);
    expect(scout.strength).toEqual(0);
    expect(scout.stealth).toEqual(0);
    expect(scout.accuracy).toEqual(0);
    expect(scout.speech).toEqual(0);
    expect(scout.heavyWeapons).toEqual(0);
    expect(scout.lightWeapons).toEqual(0);
    expect(scout.intelligence).toEqual(0);
    expect(scout.melee).toEqual(0);
    expect(scout.healing).toEqual(0);
  });
  test('should contain a method to create a name that the user can enter', () => {
    scout.assignName("Slane");
    expect(scout.name).toEqual("Slane");
  });
  test('should contain a method that will assign a number between 1 and 5 to each property', () => {
    scout.assignNumbers(5, 2, 5, 2, 4, 1, 2, 5, 3, 4);
    expect(scout.speed).toEqual(5);
    expect(scout.strength).toEqual(2);
    expect(scout.stealth).toEqual(5);
    expect(scout.accuracy).toEqual(2);
    expect(scout.speech).toEqual(4);
    expect(scout.heavyWeapons).toEqual(1);
    expect(scout.lightWeapons).toEqual(2);
    expect(scout.intelligence).toEqual(5);
    expect(scout.melee).toEqual(3);
    expect(scout.healing).toEqual(4);
  });
});