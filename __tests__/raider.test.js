import { Raider } from '../src/js/raider.js';

describe('Raider', () => {
  let reusableRaider;

  beforeEach(() => {
    reusableRaider = new Raider();
  });

  test('should create a raider object with five properties, with each property being 0', () => {
    expect(reusableRaider.speed).toEqual(0);
    expect(reusableRaider.strength).toEqual(0);
    expect(reusableRaider.stealth).toEqual(0);
    expect(reusableRaider.accuracy).toEqual(0);
    expect(reusableRaider.speech).toEqual(0);
  });
});