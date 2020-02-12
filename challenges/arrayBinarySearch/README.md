# Challenge Summary
<!-- Short summary or background information -->
Return the index of an array for a search key.

## Challenge Description
<!-- Description of the challenge -->
Write a function called binarySearch that has 2 arguments, a sorted array
and a search key, with built-ins return the index of the array is equal to the searchKey
If the element doesn't exist return -1

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
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

## Solution
<!-- Embedded whiteboard image -->
![Whiteboard Image](./assets/binary-search.jpg)