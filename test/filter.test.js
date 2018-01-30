const _ = require('../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.filter(nums, num => num % 2 === 1)).toEqual([5, 7, 11]);
  });

  it('filters an object to only numeric values', () => {
    const characterAttributes = {
      name: 'Thokul Mongothsbeard',
      honorific: 'Lord Thokul Mongothsbeard the Arcane',
      race: 'human',
      class: 'druid',
      strength: 4,
      constitution: 7,
      dexterity: 10,
      intelligence: 16,
      wisdom: 5,
      charisma: 4
    };

    const abilityScores = _.filter(characterAttributes, (value) => !isNaN(value));
    expect(abilityScores).toEqual([4, 7, 10, 16, 5, 4]);
  });

  it('filters an array-like object to odd numbers', () => {
    const nums = {
      length: 4,
      0: 2,
      1: 4,
      2: 5,
      3: 6
    };
    expect(_.filter(nums, num => num % 2 === 1)).toEqual([5]);
  });

  it('returns an empty array if an empty array is given', () => {
    expect(_.filter([], num => num % 2 === 1)).toEqual([]);
  });

  it('returns an empty array if an empty array-like object is given', () => {
    expect(_.filter({ length:0 }, num => num % 2 === 1)).toEqual([]);
  });

  it('returns an empty array if an empty object is given', () => {
    expect(_.filter({}, num => num % 2 === 1)).toEqual([]);
  });

  it('returns all elements if a callback always returns an empty object', () => {
    expect(_.filter([1, 2, 3], () => ({}))).toEqual([1, 2, 3]);
  });

  it('returns all elements if a callback always returns an empty array', () => {
    expect(_.filter([1, 2, 3], () => [])).toEqual([1, 2, 3]);
  });

  it('returns all elements if a callback always returns a number', () => {
    expect(_.filter([1, 2, 3], () => 42)).toEqual([1, 2, 3]);
  });

  it('returns all elements if a callback always returns a string', () => {
    expect(_.filter([1, 2, 3], () => 'foo')).toEqual([1, 2, 3]);
  });

  it('returns all elements if a callback always returns some object', () => {
    expect(_.filter([1, 2, 3], () => new Date())).toEqual([1, 2, 3]);
  });

  it('returns no element if a callback always returns null', () => {
    expect(_.filter([1, 2, 3], () => null)).toEqual([]);
  });

  it('returns no element if a callback always returns undefined', () => {
    expect(_.filter([1, 2, 3], () => undefined)).toEqual([]);
  });

  it('returns no element if a callback always returns 0', () => {
    expect(_.filter([1, 2, 3], () => 0)).toEqual([]);
  });

  it('returns no element if a callback always returns NaN', () => {
    expect(_.filter([1, 2, 3], () => NaN)).toEqual([]);
  });

  it('returns no element if a callback always returns an empty string', () => {
    expect(_.filter([1, 2, 3], () => '')).toEqual([]);
  });
});