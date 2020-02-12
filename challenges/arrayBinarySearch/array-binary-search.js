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

Calculate the middle index of the sorted array,
If middle index is equal, return middle index,
  Else if greater than searchKey, search the first half,
  Loop over first half from middle to start.
    if current value equals searchKey return current index,
    else if first half current value is less than searchKey return -1.
  Else if less than searchKey, search second half,
  Loop over first half from middle to end.
    if current value equals searchKey return current index,
    else if first half current value is greater than searchKey return -1.
Else return -1.


---------------------- */

let binarySearch = (sortedArray,searchKey) => {
    const middleIndex = Math.round(sortedArray/2);



}

module.exports = binarySearch;