/* array-shift

write a function that takes an array and a value to add to the array and 
addes the value to the middle of the array.
If the array length is a odd length round up and add the value

For parameters:
[2,4,6,8], 5 output: [2,4,5,6,8]
[4,8,15,23,42], 16 output: [4,8,15,16,23,42]

insertShiftArray(arr,val)
INPUT array and a value
OUTPUT array with value in the middle
 
RETURN array */

let insertShiftArray = (array,value) => {
    const arrayLength = array.length;
    const middleIndex = Math.round(arrayLength/2);
    let resultArray = [];
  
    for (let i = 0; i<arrayLength; i++) {
  
      if (i === middleIndex) {
        resultArray.push(value,array[i]);
      } else {
        resultArray.push(array[i]);
      }
  
    }
    return resultArray;
  }



/* ------------------------------------------------------------------------------------------------
TESTS
 
npm test challenges/arrayShift/array-shift.js
------------------------------------------------------------------------------------------------ */


  describe('Array-Shift', () => {
    test('It should return an array with a given value in the middle', () => {
      expect(insertShiftArray([2,4,6,8], 5)).toStrictEqual([2,4,5,6,8]);
      expect(insertShiftArray([4,8,15,23,42], 16).toStrictEqual([4,8,15,16,23,42]));
    });
  });