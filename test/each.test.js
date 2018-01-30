const _ = require('../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arr = ['a', 'b', 'c'];
    let count = 0;
    _.each(arr, function(element, index, array) {
      expect(element).toEqual(array[index]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrayLikeObj = {
      length: 3,
      0: 'a',
      1: 'b',
      2: 'c'
    };
    let count = 0;
    _.each(arrayLikeObj, function(element, index, iteratedArrayLikeObj) {
      expect(element).toEqual(iteratedArrayLikeObj[index]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
      name: 'Calvin',
      age: 6,
      occupation: 'student'
    };
    let count = 0;
    _.each(obj, function(value, key, iteratedObj) {
      expect(value).toEqual(iteratedObj[key]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates no elements of an empty array', () => {
    let count = 0;
    _.each([], function(element, index, array) {
      count += 1;
    });
    expect(count).toBe(0);
  });

  it('iterates no elements of an empty object', () => {
    let count = 0;
    _.each({}, function(element, index, array) {
      count += 1;
    });
    expect(count).toBe(0);
  });

  // This test failed because isArrayLike returns true, but no property has a numeric index.
  it('iterates every element of an object which has length property, but keys of other elements aren\'t numeric', () => {
    let obj = {
      name: 'ruler',
      color: 'black',
      length: 3
    };
    let catalog = '';
    _.each(obj, function(element, index, array) {
      catalog += element + ',';
    });
    expect(catalog).toBe('ruler,black,30,');
    // 'undefined,undefined,undefined' was returned.
  });

  it('iterates every element of an array-like object if the key starts with one', () => {
    let arrayLikeObj = {
      length: 3,
      1: 'a',
      2: 'b',
      3: 'c'
    };
    let str = '';
    _.each(arrayLikeObj, function(element, index, array) {
      str += element + ',';
    });
    expect(str).toBe('undefined,a,b,');
  });
});

