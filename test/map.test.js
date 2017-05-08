_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every element in an array of strings to add Hey, in the beginning', () => {
    const arr = ['Sam', 'Girl', 'Man'];
    const mappedArr = _.map(arr, (el) => ('Hey, '+el));
    expect(mappedArr).toEqual(['Hey, Sam', 'Hey, Girl', 'Hey, Man']);
  });
});