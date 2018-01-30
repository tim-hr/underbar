const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });
  });

  describe('processing an array-like object of which values are numbers', () => {
    it('returns true if all numbers in an array-like object are odd', () => {
      const nums = {
        length: 4,
        0: 1,
        1: 3,
        2: 5,
        3: 7
      };
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array-like object are odd', () => {
      const nums = {
        length: 5,
        0: 1,
        1: 3,
        2: 5,
        3: 6,
        4: 7
      };
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });
  });

  describe('processing an object of which values are numbers', () => {
    it('returns true if all numbers in an object are odd', () => {
      const nums = {
        'a': 1,
        'b': 3,
        'c': 5,
        'd': 7
      };
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an object are odd', () => {
      const nums = {
        'a': 1,
        'b': 3,
        'c': 5,
        'd': 6,
        'e': 7
      };
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });
  });

  describe('processing an empty objects', () => {
    it('returns true if an array is empty', () => {
      expect(_.every([], num => num % 2 === 1)).toBe(true);
    });

    it('returns true if an array-like object is empty', () => {
      expect(_.every({ length: 0 }, num => num % 2 === 1)).toBe(true);
    });

    it('returns true if an object is empty', () => {
      expect(_.every({}, num => num % 2 === 1)).toBe(true);
    });
  });

  describe('a callback function returns truthy values', () => {
    it('returns true if a callback function returns an empty object', () => {
      expect(_.every([1, 3, 5], () => ({}))).toBe(true);
    });

    it('returns true if a callback function returns an empty array', () => {
      expect(_.every([1, 3, 5], () => [])).toBe(true);
    });

    it('returns true if a callback function returns a number', () => {
      expect(_.every([1, 3, 5], () => 42)).toBe(true);
    });

    it('returns true if a callback function returns a non empty string', () => {
      expect(_.every([1, 3, 5], () => 'foo')).toBe(true);
    });

    it('returns true if a callback function returns some object', () => {
      expect(_.every([1, 3, 5], () => new Date())).toBe(true);
    });
  })

  describe('a callback function returns falsy values', () => {
    it('returns false if a callback function returns null', () => {
      expect(_.every([1, 3, 5], () => null)).toBe(false);
    });

    it('returns false if a callback function returns undefined', () => {
      expect(_.every([1, 3, 5], () => undefined)).toBe(false);
    });

    it('returns false if a callback function returns 0', () => {
      expect(_.every([1, 3, 5], () => 0)).toBe(false);
    });

    it('returns false if a callback function returns NaN', () => {
      expect(_.every([1, 3, 5], () => NaN)).toBe(false);
    });

    it('returns false if a callback function returns empty string', () => {
      expect(_.every([1, 3, 5], () => '')).toBe(false);
    });
  });
});