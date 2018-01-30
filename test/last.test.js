const _ = require('../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    expect(_.last(['a', 'b', 'c'])).toEqual('c');
  });

  it('returns the last 2 elements of an array', () => {
    expect(_.last(['a', 'b', 'c'], 2)).toEqual(['b', 'c']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns the whole array if you ask for all elements', () => {
  	expect(_.last(['a', 'b', 'c'], 3)).toEqual(['a', 'b', 'c']);
  });

  it('returns an empty array if you pass zero', () => {
  	expect(_.last(['a', 'b', 'c'], 0)).toEqual([]);
  });

  it('returns an empty array if you pass a negative number', () => {
  	expect(_.last(['a', 'b', 'c'], -1)).toEqual([]);
  });
});