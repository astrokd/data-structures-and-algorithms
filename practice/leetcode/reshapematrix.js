/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
//
// https://leetcode.com/problems/reshape-the-matrix/
//
// get m and n of arrays lengths
// check if m x n != r x c return mat if true
// flat mat into one array
// define empty result array
// loop r
//   add r empty arrays to result
// loop flat of mat
//     push index into result for each c
// return result
var matrixReshape = function(mat, r, c) {
    const m = mat.length
    const n = mat[0].length
    if ( m*n != r*c) return mat
    const flat = mat.flat()
    let result = []
    for (let i=0; i<r ; i++) {
        let tmp = []
        result.push(tmp)
    }
    let idx = 0
    let t = 1
    for (let j=0; j<flat.length ;j++) {
        result[idx].push(flat[j]);
        if(t==c) {
            idx++
            t = 1
        } else {
            t++;
        }
    }
    return result
};

let mat1 = [[1,2],[3,4]]
let r1 = 1
let c1 = 4

let mat2 = [[1,2],[3,4]]
let r2 = 2
let c2 = 4

console.log("results:",matrixReshape(mat1,r1,c1))
console.log("results:",matrixReshape(mat2,r2,c2))