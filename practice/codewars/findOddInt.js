// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  let oddistInt = []
  /* loop through the array and place each integer in a hashMap */
  let intMap = new Map()
  
  A.forEach(int => {
    if(!intMap.has(int)) {
      intMap.set(int, {integer:int, count:1})
    } else {
      const newCount = intMap.get(int).count + 1
      intMap.set(int, {integer:int, count:newCount})
    }
  })
  /* loop through hashMap and find the int count that is odd */
  intMap.forEach(item => {
    if(item.count % 2 !== 0) {
      oddistInt = item.integer
    }
  })
  
  return oddistInt;
}

console.log('should be 5',findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
console.log('should be -1',findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))

