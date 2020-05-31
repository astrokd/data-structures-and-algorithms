// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  let oddistInt = new Set()
  /* loop through the array and place each integer in a hashMap */
  let intMap = new Map()
  
  A.forEach(int => {
    if(!intMap.has(int)) {
      intMap.set(int, {integer:int, count:1})
      oddistInt.add(int)
    } else {
      const newCount = intMap.get(int).count + 1
      intMap.set(int, {integer:int, count:newCount})
      // remove or add int from Set obj
      if (oddistInt.has(int)) {
        if (newCount%2 === 0) oddistInt.delete(int)
      } else {
        if (newCount%2 !== 0) oddistInt.add(int)
      }
      
    }
  })
  /* loop through hashMap and find the int count that is odd */
  // intMap.forEach(item => {
  //   if(item.count % 2 !== 0) {
  //     oddistInt = item.integer
  //   }
  // })
  
  // return from Set obj with spread
  return [...oddistInt][0];
}

console.log('should be 5',findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
console.log('should be -1',findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))

console.log('should be 5',findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))
console.log('should be 10',findOdd([10]))
console.log('should be 10',findOdd([1,1,1,1,1,1,10,1,1,1,1]))
console.log('should be 1',findOdd([5,4,3,2,1,5,4,3,2,10,10]))
