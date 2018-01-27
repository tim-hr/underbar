const _ = require('../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([1, 2, 3])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrayLikeObj = {
      length: 10
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const nonArrayLikeObj = {
      'foo': 'bar'
    };
    expect(_.isArrayLike(nonArrayLikeObj)).toBe(false);
  });

  it('returns true for an empty array', () => {
    expect(_.isArrayLike([])).toBe(true);
  });

  it('returns false for the value of length is a numeric string', () => {
    const arrayLikeObj = {
      length: '10'
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(false);
  });

  it('returns false for the value of length is negative', () => {
    const arrayLikeObj = {
      length: -1
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(false);
  });
});
