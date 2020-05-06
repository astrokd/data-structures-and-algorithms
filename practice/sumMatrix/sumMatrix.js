// Given a matrix, find the sum of each row.

/*
 * INPUT: [[1,4,5],[0,-3,2],[null,4,1]]
 * OUTPUT: [10,-1,5]
 * Nulls are 0, there can be negative numbers
 * 
 * Algorithm: 
 * loop over input array 
 * and then loop through each array in input 
 * evaluate and sum numbers in array
 * return new array with sums
 * 
 */

let sumMatrix = (array) => {
  let results = []
  let sum = 0
  array.forEach( (element,idx) => {
    element.forEach(num => {
      if (num === null) sum = sum + 0
      sum = sum + num
    })
    results[idx] = sum
    sum = 0
  });
 return results
}

let input1 = [ [1, 2, 3],[3, 5, 7],[1, 7, 10] ]
let input2 = [ [0, 1, 5],[-4, 7, 2],[-3, 12, 11] ]
let input3 = [ [1,4,5],[0,-3,2],[null,4,1] ]

console.log('sumMatrix input1',sumMatrix(input1))
console.log('sumMatrix input2',sumMatrix(input2))
console.log('sumMatrix input3',sumMatrix(input3))
