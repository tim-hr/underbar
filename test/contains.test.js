const _ = require('../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 4)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 7)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const ponies = {
      'pony1': 'Fluttershy',
      'pony2': 'Pinkie Pie',
      'pony3': 'Rainbow Dash',
      'pony4': 'Rarity'
    };
    expect(_.contains(ponies, 'Rarity')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const ponies = {
      'pony1': 'Fluttershy',
      'pony2': 'Pinkie Pie',
      'pony3': 'Rainbow Dash',
      'pony4': 'Rarity'
    };
    expect(_.contains(ponies, 'Applejack')).toBe(false);
  });

  it('returns true if the target value is among the values of an array-like object', () => {
    const ponies = {
      length: 4,
      0: 'Fluttershy',
      1: 'Pinkie Pie',
      2: 'Rainbow Dash',
      3: 'Rarity'
    };
    expect(_.contains(ponies, 'Rarity')).toBe(true);
  });

  it('returns false if the target value is not among the values of an array-like object', () => {
    const ponies = {
      length: 4,
      0: 'Fluttershy',
      1: 'Pinkie Pie',
      2: 'Rainbow Dash',
      3: 'Rarity'
    };
    expect(_.contains(ponies, 'Applejack')).toBe(false);
  });

  it('returns false if an array is empty', () => {
    expect(_.contains([], 0)).toBe(false);
  });

  it('returns false if an array-like object is empty', () => {
    expect(_.contains({ length: 0}, 0)).toBe(false);
  });

  it('returns false if an object is empty', () => {
    expect(_.contains({}, 0)).toBe(false);
  });
});