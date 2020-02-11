// array-shift

// write a function that takes an array and a value to add to the array and 
// addes the value to the middle of the array.
// If the array length is a odd length round up and add the value

// For parameters:
// [2,4,6,8], 5 output: [2,4,5,6,8]
// [4,8,15,23,42], 16 output: [4,8,15,16,23,42]

// insertShiftArray(arr,val)
// INPUT array and a value
// OUTPUT array with value in the middle
// array.splice(round(array.length/2), 0, value)
// RETURN array

let insertShiftArray = (array,value) => {
    array.splice(Math.round(array.length/2), 0, value);
    return array;
}
