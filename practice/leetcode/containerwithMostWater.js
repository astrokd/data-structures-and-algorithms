/**
 * @param {number[]} height
 * @return {number}
 */

// problem: https://leetcode.com/problems/container-with-most-water/
// my solution: https://leetcode.com/submissions/detail/739472319/

// loop from left and right of height array
//   calc volumn 
//.  if greater than current max volumn
//.   set equal to max volumn
//.  if left greater then right 
//.    decrement right
//.  else increment left
//.  
//.  [1,8,6,2,5,4,8,3,7]
//.  [1,1]

var maxArea = function(height) {
    let left = 0, right = height.length-1
    let maxvol = 0
    while (left != right) {
        const h = height[left] < height[right] ? height[left] : height[right]
        const w = right - left
        const vol = h * w
        if (vol > maxvol) maxvol = vol
        
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxvol
};

let h1 = [1,8,6,2,5,4,8,3,7]
let h2 = [1,1]

console.log("max area:",maxArea(h1))
console.log("max area:",maxArea(h2))