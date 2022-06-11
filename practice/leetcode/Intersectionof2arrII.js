// https://leetcode.com/problems/intersection-of-two-arrays-ii/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// determine larger array
// loop over small array
//.  loop over slarge array
//.    if larger array val at index is eq to any in small
//.      remove val from small array and add to result array
//.      move to next index in larger array
//.    else
//       remove val from small array
//   if small array is empty break
//. return result array
var intersect = function(nums1, nums2) {
    let result = []
    let large = nums1.length >= nums2.length ? nums1 : nums2
    let small = nums1.length >= nums2.length ? nums2 : nums1
    console.log("large:",large," small:",small)
    let s = small.length-1
    while (s >= 0) {
        let l = 0
        while (l < large.length) {
            if (small[s] == large[l]) {
                result.push(small.pop())
                break
            } else if (l == large.length-1) {
                small.pop()
            }
            l++
        }
        s--
    }
    return result
};

n1a = [1,2,2,1]
n2a = [2,2]

n1b = [4,9,5]
n2b = [9,4,9,8,4]

console.log(intersect(n1a,n2a))
console.log(intersect(n1b,n2b))