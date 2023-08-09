import { Raider } from '../src/js/raider.js';

describe('Raider', () => {
  let raider;

  beforeEach(() => {
    raider = new Raider();
  });

  test('should create a raider object with five properties, with each property being 0', () => {
    expect(raider.speed).toEqual(0);
    expect(raider.strength).toEqual(0);
    expect(raider.stealth).toEqual(0);
    expect(raider.accuracy).toEqual(0);
    expect(raider.speech).toEqual(0);
  });
  test('should contain a method that will add a number between 1 and 5 to each property', () => {
    raider.assignNumbers(1, 2, 3, 4, 5);
    expect(raider.speed).toEqual(1);
    expect(raider.strength).toEqual(2);
    expect(raider.stealth).toEqual(3);
    expect(raider.accuracy).toEqual(4);
    expect(raider.speech).toEqual(5);
  });
  test('should contain a method to create a name that the user can enter', () => {
    raider.assignName("Popeye");
    expect(raider.name).toEqual("Popeye");
  });
});