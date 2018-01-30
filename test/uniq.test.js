const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups numbers in an array-like object', () => {
  	const nums = {
  		length: 5,
  		0: 2,
  		1: 4,
  		2: 5,
  		3: 5,
  		4: 4
  	};
  	expect(_.uniq(nums)).toEqual([2, 4, 5]);
  });

  it('de-dups numbers in an object', () => {
  	const nums = {
  		'a': 2,
  		'b': 4,
  		'c': 5,
  		'd': 5,
  		'e': 4
  	};
  	expect(_.uniq(nums)).toEqual([2, 4, 5]);
  });

  it('returns an empty array if an empty array is given', () => {
  	expect(_.uniq([])).toEqual([]);
  });

  it('returns an empty array if an empty array-like object is given', () => {
  	expect(_.uniq({ length:0 })).toEqual([]);
  });

  it('returns an empty array if an empty object', () => {
  	expect(_.uniq({})).toEqual([]);
  });
});