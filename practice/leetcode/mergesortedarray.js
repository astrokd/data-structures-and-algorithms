// https://leetcode.com/problems/merge-sorted-array/

/** 
 * 
 * 
 */

// define result array
// loop for count of m+n=i
//.  compare nums1 m and nums2 n
//     add lesser value to result at i
// return result array

// nums1=[1,2,3,0,0,0], m=3
// nums2=[2,5,6], n=3
// result=[], i=0, o=0, p=0
// nums1[o]=1. nums2[p]=2
// result=[1], i=1, o=1, p=0
// nums1[o]=2, nums2[p]=2
// result=[1,2], i=2, o=2, p=0
// nums1[o]=3, nums2[p]=2
// result=[]

var merge = function(nums1, m, nums2, n) {
    if (nums1[0] === undefined) return nums2
    if (nums2[0] === undefined) return nums1
    let result = []
    let i=0, o=0, p=0
    while(i < m+n) {
        // console.log("i:",i," o:",o," nums1[o]:",nums1[o]," p:",p," nums2[p]:",nums2[p]," result:",result)
        if((nums1[o] < nums2[p] && o!=m) || nums2[p] === undefined) {
            result.push(nums1[o])
            o++
        } else {
            result.push(nums2[p])
            if (p != n) {p++}
        }
        i++
    }
    return result
};

const n1 = [1,2,3,0,0,0]
const c1 = 3
const n2 = [2,5,6]
const c2 = 3

console.log(merge(n1,c1,n2,c2))
console.log(merge([1],1,[],0))
console.log(merge([0],0,[1],1))

const nums1 = [1,4,7,0,0]
const mc1 = 3
const nums2 = [2,5]
const nc2 = 2

console.log(merge(nums1,mc1,nums2,nc2))