import { Soldier } from '../src/js/soldier.js';

describe('Soldier', () => {
  let soldier;

  beforeEach(() => {
    soldier = new Soldier();
  });

  test('should create a scout object with ten properties, with each property being a 0', () => {
    expect(soldier.speed).toEqual(0);
    expect(soldier.strength).toEqual(0);
    expect(soldier.stealth).toEqual(0);
    expect(soldier.accuracy).toEqual(0);
    expect(soldier.speech).toEqual(0);
    expect(soldier.heavyWeapons).toEqual(0);
    expect(soldier.lightWeapons).toEqual(0);
    expect(soldier.intelligence).toEqual(0);
    expect(soldier.melee).toEqual(0);
    expect(soldier.healing).toEqual(0);
  });
  test('should contain a method to create a name that the user can enter', () => {
    soldier.assignName("Ryker");
    expect(soldier.name).toEqual("Ryker");
  });
  test('should contain a method that will add a number between 1 and 5 to each property', () => {
    soldier.assignNumbers(3, 4, 3, 4, 2, 5, 5, 2, 4, 2);
    expect(soldier.speed).toEqual(3);
    expect(soldier.strength).toEqual(4);
    expect(soldier.stealth).toEqual(3);
    expect(soldier.accuracy).toEqual(4);
    expect(soldier.speech).toEqual(2);
    expect(soldier.heavyWeapons).toEqual(5);
    expect(soldier.lightWeapons).toEqual(5);
    expect(soldier.intelligence).toEqual(2);
    expect(soldier.melee).toEqual(4);
    expect(soldier.healing).toEqual(2);
  });
});