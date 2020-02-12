/* ------------------------------------------------------------------------------------------------
TESTS
 
npm test challenges/
------------------------------------------------------------------------------------------------ */

const binarySearch = require('../array-binary-search.js');

describe('array-binary-search', () => {
    const sortedArray = [4,8,15,16,23,42];
    const searchValue = 15;
    const output = 2;
    const result;
      it('should return the index of the sorted array equal to the searchValue', () => {
        result = binarySearch(sortedArray,searchValue);
        expect(result).not.toEqual(-1);
        expect(result).toEqual(output);
      });
    });