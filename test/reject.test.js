const _ = require('../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const orderItems = _.reject(order, (value) => value === null);
    expect(orderItems).toEqual(['burger', 'ketchup', 'cookie']);
  });

  it('rejects odd numbers from an array-like object', () => {
    const nums = {
      length: 4,
      0: 2,
      1: 4,
      2: 5,
      3: 6
    };
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6]);
  });

  it('returns an empty array if an empty array is given', () => {
    expect(_.reject([], num => num % 2 === 1)).toEqual([]);
  });

  it('returns an empty array if an empty array-like object is given', () => {
    expect(_.reject({ length:0 }, num => num % 2 === 1)).toEqual([]);
  });

  it('returns an empty array if an empty object is given', () => {
    expect(_.reject({}, num => num % 2 === 1)).toEqual([]);
  });

  it('returns an empty array if a callback always returns an empty object', () => {
    expect(_.reject([1, 2, 3], () => ({}))).toEqual([]);
  });

  it('returns an empty array if a callback always returns an empty array', () => {
    expect(_.reject([1, 2, 3], () => [])).toEqual([]);
  });

  it('returns an empty array if a callback always returns a number', () => {
    expect(_.reject([1, 2, 3], () => 42)).toEqual([]);
  });

  it('returns an empty array if a callback always returns a string', () => {
    expect(_.reject([1, 2, 3], () => 'foo')).toEqual([]);
  });

  it('returns an empty array if a callback always returns some object', () => {
    expect(_.reject([1, 2, 3], () => new Date())).toEqual([]);
  });

  it('returns all elements if a callback always returns null', () => {
    expect(_.reject([1, 2, 3], () => null)).toEqual([1, 2, 3]);
  });

  it('returns all elements if a callback always returns undefined', () => {
    expect(_.reject([1, 2, 3], () => undefined)).toEqual([1, 2, 3]);
  });

  it('returns all elements if a callback always returns 0', () => {
    expect(_.reject([1, 2, 3], () => 0)).toEqual([1, 2, 3]);
  });

  it('returns all elements if a callback always returns NaN', () => {
    expect(_.reject([1, 2, 3], () => NaN)).toEqual([1, 2, 3]);
  });

  it('returns all elements if a callback always returns an empty string', () => {
    expect(_.reject([1, 2, 3], () => null)).toEqual([1, 2, 3]);
  });
});