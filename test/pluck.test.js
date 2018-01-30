const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of undefined, if the key doesn\'t exist', () => {
  	const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
  	];
  	const result = _.pluck(people, 'birthday');
  	expect(result).toEqual([undefined, undefined, undefined]);
  });

  it('returns an array of just ages, given an array-like object of people objects', () => {
    const people = {
      length: 3,
      0: { name: 'Harriet', age: 12},
      1: { name: 'Lazarus', age: 999},
      2: { name: 'Bethany', age: 14}
    };
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of just ages, given an object of people', () => {
    const people = {
      a: { name: 'Harriet', age: 12},
      b: { name: 'Lazarus', age: 999},
      c: { name: 'Bethany', age: 14}
    };
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an empty array, given an empty array', () => {
  	expect(_.pluck([], 'aaa')).toEqual([]);
  });

  it('returns an empty array, given an empty array-like object', () => {
    const people = {
      length: 0
    };
    expect(_.pluck(people, 'aaa')).toEqual([]);
  });

  it('returns an empty array ,given an empty object', () => {
    expect(_.pluck({}, 'aaa')).toEqual([]);
  });
});