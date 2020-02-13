/* ------------------------------------------------------------------------------------------------
TESTS
 
npm test challenges/
------------------------------------------------------------------------------------------------ */

const binarySearch = require('../array-binary-search.js');

describe('array-binary-search success', () => {
    const sortedArray = [4,8,15,16,23,42];
    const searchValue = 15;
    const output = 2;
    let result;

      it('should return the index of the sorted array equal to the searchValue', () => {
        result = binarySearch(sortedArray,searchValue);
        expect(result).not.toEqual(-1);
        expect(result).toEqual(output);
      });
    });

    describe('array-binary-search failed', () => {
      const sortedArray = [11,22,33,44,55,66,77];
      const searchValue = 90;
      const output = -1;
      let result;
  
        it('should return -1 since searchValue does not exist in array', () => {
          result = binarySearch(sortedArray,searchValue);
          expect(result).toEqual(-1);
          expect(result).toEqual(output);
        });
      });
