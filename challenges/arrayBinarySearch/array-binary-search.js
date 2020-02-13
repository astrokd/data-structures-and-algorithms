/* ----------------------
array-binary-search

Write a function called binarySearch that has 2 arguments, a sorted array
and a search key, with built-ins return the index of the array is equal to the searchKey
If the element doesn't exist return -1

helped by https://www.geeksforgeeks.org/binary-search-in-javascript/

For parameters:
[4,8,15,16,23,42], 15 output: 2
[11,22,33,44,55,66,77], 90 output: -1

Input <--- sorted array, searchKey
Output <--- number, the index of the searchKey or -1

Define start set to 0
Define end set to length of sort array
Define middle
Define result and set equal to -1

Loop over the array start to end while start is less end,
  Calculate the middle,
  If middle index is equal, return middle index, and exit loop.
  Else if middle index value is less than searchKey,
    Set start to middle, making the right side the new search area
  Else,
Return result

---------------------- */

let binarySearch = (sortedArray,searchKey) => {
  let start = 0;
  let end = sortedArray.length-1;
  let middle;
  let result = -1;

  for(start; start<=end; start++) {
    // get middle
    middle = Math.round((start+end)/2);
    //check is middle equal searchKey
    if(sortedArray[middle] === searchKey) {
      result = middle;
      break;
    } else if (sortedArray[middle] < searchKey) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

return result;
}

module.exports = binarySearch;