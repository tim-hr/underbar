const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any number in an array-like object is odd', () => {
  	const nums = {
  		length: 4,
  		0: 2,
  		1: 4,
  		2: 5,
  		3: 6
  	};
  	expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number in an array-like object is odd', () => {
  	const nums = {
  		length: 4,
  		0: 2,
  		1: 4,
  		2: 6,
  		3: 8
  	};
  	expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any number in an object is odd', () => {
  	const nums = {
  		'a': 2,
  		'b': 4,
  		'c': 5,
  		'd': 6
  	};
  	expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns true if no number in an object is odd', () => {
  	const nums = {
  		'a': 2,
  		'b': 4,
  		'c': 6,
  		'd': 8
  	};
  	expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns false if an array is empty', () => {
  	expect(_.some([], num => num % 2 === 1)).toBe(false);
  });

  it('returns false if an array-like object is empty', () => {
  	expect(_.some({ length:0 }, num => num % 2 === 1)).toBe(false);
  });

  it('returns false if an object is empty', () => {
  	expect(_.some({}, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if a callback returns an empty object', () => {
  	expect(_.some([1, 2, 3], () => ({}))).toBe(true);
  });

  it('returns true if a callback returns an empty array', () => {
  	expect(_.some([1, 2, 3], () => [])).toBe(true);
  });

  it('returns true if a callback returns a number', () => {
  	expect(_.some([1, 2, 3], () => 42)).toBe(true);
  });

  it('returns true if a callback returns a string', () => {
  	expect(_.some([1, 2, 3], () => 'foo')).toBe(true);
  });

  it('returns true if a callback returns some object', () => {
  	expect(_.some([1, 2, 3], () => new Date())).toBe(true);
  });

  it('returns false if a callback returns null', () => {
  	expect(_.some([1, 2, 3], () => null)).toBe(false);
  });

  it('returns false if a callback returns undefined', () => {
  	expect(_.some([1, 2, 3], () => undefined)).toBe(false);
  });

  it('returns false if a callback returns 0', () => {
  	expect(_.some([1, 2, 3], () => 0)).toBe(false);
  });

  it('returns false if a callback returns NaN', () => {
  	expect(_.some([1, 2, 3], () => NaN)).toBe(false);
  });

  it('returns false if a callback returns an empty string', () => {
  	expect(_.some([1, 2, 3], () => '')).toBe(false);
  });
});