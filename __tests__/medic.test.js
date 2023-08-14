import { Medic } from '../src/js/medic.js';

describe('Medic', () => {
  let medic;

  beforeEach(() => {
    medic = new Medic();
  });

  test('should create a medic object with ten properties, with each property being a 0', () => {
    expect(medic.speed).toEqual(0);
    expect(medic.strength).toEqual(0);
    expect(medic.stealth).toEqual(0);
    expect(medic.accuracy).toEqual(0);
    expect(medic.speech).toEqual(0);
    expect(medic.heavyWeapons).toEqual(0);
    expect(medic.lightWeapons).toEqual(0);
    expect(medic.intelligence).toEqual(0);
    expect(medic.melee).toEqual(0);
    expect(medic.healing).toEqual(0);
  });
  test('should contain a method to create a name that the user can enter', () => {
    medic.assignName("Apollo");
    expect(medic.name).toEqual("Apollo");
  });
  test('should contain a method that will add a number between 1 and 5 to each property', () => {
    medic.assignNumbers(5, 3, 3, 3, 4, 1, 3, 5, 2, 5);
    expect(medic.speed).toEqual(5);
    expect(medic.strength).toEqual(3);
    expect(medic.stealth).toEqual(3);
    expect(medic.accuracy).toEqual(3);
    expect(medic.speech).toEqual(4);
    expect(medic.heavyWeapons).toEqual(1);
    expect(medic.lightWeapons).toEqual(3);
    expect(medic.intelligence).toEqual(5);
    expect(medic.melee).toEqual(2);
    expect(medic.healing).toEqual(5);
  });
});
