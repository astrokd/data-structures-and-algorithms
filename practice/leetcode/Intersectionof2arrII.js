/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/**
 * compare lengths of the arrays and 
 *   make sure the larger one is in nums2 position
 * Define a Map object
 * Loop over nums1 and
 *   place nums as key and count of num as entries
 * Define an empty array to be result
 * Loop over nums2 and
 *   check if the Map object has nums2 num and
 *     push num into result
 *     get count entry and
 *          decrement count and
 *          update Map Object with new count or
 *          delete num key if count 0
 * return result
 */

var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) { 
        // makes sure nums1 the small array
        return intersect(nums2, nums1)
    }
    
    const map = new Map()
    nums1.forEach(num => {
        const count = map.has(num) ? map.get(num)+1 : 1
        map.set(num,count)
    })
    
    let result = []
    nums2.forEach(num => {
        if (map.has(num)) {
            result.push(num)
            
            const count = map.get(num) - 1
            if (count == 0) {
                map.delete(num)
            } else {
                map.set(num,count)
            }
            
        }
    })
    
    return result
};

n1a = [1,2,2,1]
n2a = [2,2]

n1b = [4,9,5]
n2b = [9,4,9,8,4]

n1c = [1,2,1]
n2c = [2,2]

console.log("reult:",intersect(n1a,n2a))
console.log("reult:",intersect(n1b,n2b))
console.log("reult:",intersect(n1c,n2c))