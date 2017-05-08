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

  it('returns true if any number is higher than 2', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num > 2)).toBe(true);
  });

  it('returns false if there is no number is higher than 10', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num > 10)).toBe(false);
  });

});