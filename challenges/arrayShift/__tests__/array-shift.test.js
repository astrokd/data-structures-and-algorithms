/* ------------------------------------------------------------------------------------------------
TESTS
 
npm test challenges/arrayShift/array-shift.js
------------------------------------------------------------------------------------------------ */

const insertShiftArray = require('../array-shift.js');

describe('Array-Shift', () => {
  const orgArray = [2,4,6,8];
  const updated = [2,4,5,6,8];
  let emptyArray = [];
  const newValue = 5;
    it('It should return an array with a given value in the middle', () => {
      emptyArray = insertShiftArray(orgArray,newValue);
      expect(emptyArray).not.toEqual(orgArray);
      expect(emptyArray).toEqual(updated);
    });
  });
