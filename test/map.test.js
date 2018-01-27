_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every numbers in an array-like object to their square', () => {
  	const arrayLikeObj = {
  		length: 5,
  		0: 1,
  		1: 2,
  		2: 3,
  		3: 4,
  		4: 5
  	};
  	const mappedArr = _.map(arrayLikeObj, (el) => el * el);
  	expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every numbers in an object to their square', () => {
  	const obj = {
  		'a': 1,
  		'b': 2,
  		'c': 3,
  		'd': 4,
  		'e': 5
  	};
  	const mappedArr = _.map(obj, (el) => el * el);
  	expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps no elements if an empty array is given', () => {
  	expect(_.map([], (el) => el * el)).toEqual([]);
  });

  it('maps no elements if an empty array-like is given', () => {
  	const arrayLikeObj = {
  		length: 0
  	};
  	const mappedArr = _.map(arrayLikeObj, (el) => el * el);
  	expect(mappedArr).toEqual([]);
  });

  it('maps no elements if an empty object is given', () => {
  	expect(_.map({}, (el) => el * el)).toEqual([]);
  });
});