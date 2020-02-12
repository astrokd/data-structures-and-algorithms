/* ------------------------------------------------------------------------------------------------
TESTS
 
npm test challenges/arrayShift/array-shift.js
------------------------------------------------------------------------------------------------ */

const Input = require('../array-shift.js');

describe('Array-Shift', () => {
    test('It should return an array with a given value in the middle', () => {
      expect(insertShiftArray([2,4,6,8], 5)).toStrictEqual([2,4,5,6,8]);
      expect(insertShiftArray([4,8,15,23,42], 16).toStrictEqual([4,8,15,16,23,42]));
    });
  });