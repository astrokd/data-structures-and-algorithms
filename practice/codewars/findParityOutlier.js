// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
*/

function findOutlier(integers){
  let even = []
  let odd = []
  let j = 0
  let k = integers.length
  
  let helper = (arr) => {
    if (j === k) return null
    if (arr[j] % 2 === 0) {
      even.push(arr[j])
    } else {
      odd.push(arr[j])
    }
    j++
    helper(arr)
  }
 
  helper(integers)

  if (even.length === 1) return even[0]
  if (odd.length === 1) return odd[0]
}

console.log('find Outlier',findOutlier([0,1,2]))
console.log('find Outlier',findOutlier([1,2,3]))
console.log('find Outlier',findOutlier([2,6,8,10,3]))
console.log('find Outlier',findOutlier([0,0,0,3,0]))
console.log('find Outlier',findOutlier([1,1,0,1,1]))