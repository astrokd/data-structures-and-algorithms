//  Write a function that reverses an array of any length and returns it

// given [1, 2, 3, 4, 5, 6] return [6, 5, 4, 3, 2, 1]

// Accept an input array into a function, 
//   create an empty array to store the new array,
//   loop through input array beginning for the last element of the array,
//     copy each element into a empty array,
//   return the originally empty array now with the input array in reverse.



let reverseArray = (array) => {
  let results = [];

  for(let i = array.length-1; i>=0; i--) {
    results.push(array[i]);
  }

  return results;
}

