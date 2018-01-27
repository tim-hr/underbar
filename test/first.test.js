const _ = require('../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns the whole array if you ask for all elements', () => {
  	expect(_.first(['a', 'b', 'c'], 3)).toEqual(['a', 'b', 'c']);
  });

  it('returns an empty array if you pass zero', () => {
  	expect(_.first(['a', 'b', 'c'], 0)).toEqual([]);
  });

  it('returns the first several elements of an array if you pass a negative number', () => {
  	expect(_.first(['a', 'b', 'c'], -1)).toEqual(['a', 'b']);
  });

  it('returns the first element of an array if you pass a negative number', () => {
    expect(_.first(['a', 'b', 'c'], -2)).toEqual(['a']);
  });

  it('returns an empty array if you pass a negative number of which absolute value is equal to length of the array', () => {
  	expect(_.first(['a', 'b', 'c'], -3)).toEqual([]);
  });

  it('returns an empty array if you pass a negative number of which absolute value is more than length of the array', () => {
  	expect(_.first(['a', 'b', 'c'], -5)).toEqual([]);
  });
});