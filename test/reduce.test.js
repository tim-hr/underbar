const _ = require('../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  it('reduces an array-like object to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = {
      length: 5,
      0: 1,
      1: 2,
      2: 3,
      3: 4,
      4: 5
    };
    const result = _.reduce(nums, (a, b) => a + b, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array-like object to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = {
      length: 5,
      0: 1,
      1: 2,
      2: 3,
      3: 4,
      4: 5
    };
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  it('reduces an object to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5
    };
    const result = _.reduce(nums, (a, b) => a + b, 0);
    expect(result).toEqual(15);
  });

  it('reduces an object to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5
    };
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  it('returns an initial value, if an empty array and the initial value is given', () => {
    expect(_.reduce([], (a, b) => a + b, 0)).toEqual(0);
  });

  it('returns undefined, if an empty array is given, but an initial value is not', () => {
    expect(_.reduce([], (a, b) => a + b)).toEqual(undefined);
  });

  it('returns an initial value, if an empty object and the initial value is given', () => {
    expect(_.reduce({}, (a, b) => a + b, 0)).toEqual(0);
  });

  it('returns undefined, if an empty object is given, but an initial value is not', () => {
    expect(_.reduce({}, (a, b) => a + b)).toEqual(undefined);
  });

  it('returns an initial value, if an empty array-like object and the initial value is given', () => {
    const nums = {
      length: 0
    };
    const result = _.reduce(nums, (a, b) => a + b, 0);
    expect(result).toEqual(0);
  });

  it('returns undefined, if an empty array-like object, but an initial value is not', () => {
    const nums = {
      length: 0
    };
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(undefined);
  });

});