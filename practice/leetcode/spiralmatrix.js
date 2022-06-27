/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// https://leetcode.com/problems/spiral-matrix/
// mxn 4x4
//   0.   1.   2.    3. n
// 0 0  ->1  ->2   ->3+
//.                  v
// 1 12  +13>  14+   4
//.  ^           v   v
// 2 11   16 < 15+   5
//.  ^               v
// 3 10  <9-  <8-   <6+
// m

// m=0.  n=0-3
// m=0-3 n=3
// m=3   n=3-0
// m=3-1 n=0
// m=1.  n=0-2
// m=1-2 n=2
// m-2.  n=2-1
 
// declare m = length of matrix, n = matrix[i]
// declare count eq m x n
// declare index = 1
// declare empty array for return
// declare i and j eq 0 
// declare n minn = 0 and maxn=length-1
// declare m minm = 0 and maxm=length-1

// loop while index lessthan count
//
//   if i == minM && j <= maxN 
//     push matrix[i][j] into result
//     if j < maxN  j++
//     else if j == maxN  i++
//
//   else if j == maxN && i <= maxM
//     push matrix[i][j] into result
//     if i < maxM  i++
//     else if i == maxM  j--
//
//   else if i == maxM && j >= minN
//     push matrix[i][j] into result
//     if j > minN  j--
//     else if j == minN  i--
// 
//   else if j == minN && i >= (minM+1)
//     push matrix[i][j] into result
//     if i > (minM+1)  i--
//     else if i == (minM+1)
//         j++
//         minN++
//         maxN--
//         minM++
//         maxM--
//    
//   increment index
//
// return result

// [[1,2,3]
// ,[4,5,6]
// ,[7,8,9]]

// [[1,2,3],[4,5,6],[7,8,9]]
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]


var spiralOrder = function(matrix) {
    const m = matrix.length, n = matrix[0].length
    const count = m * n
    let index = 1
    let result = []
    let i=0 // index of m 
    let j=0 // index of n
    let minN = 0, maxN = n-1
    let minM = 0, maxM = m-1

    while (index <= count) {
        // console.log("count:",count," index:",index," result:",result)
        // console.log("minN",minN," i:",i," maxN:",maxN,)
        // console.log("minM",minM," j:",j," maxM:",maxM,)
        if (i == minM && j <= maxN) {
            result.push(matrix[i][j])
            if (j < maxN) {
                j++
            } else if (j == maxN) {
                i++
            }

        } else if (j == maxN && i <= maxM) {
            result.push(matrix[i][j])
            if (i < maxM) {
                i++
            } else if (i == maxM) {
                j--
            }

        } else if (i == maxM && j >= minN) {
            result.push(matrix[i][j])
            if (j > minN) {
                j--
            } else if (j == minN) {
                i--
            }

        } else if (j == minN && i >= (minM+1)) {
            result.push(matrix[i][j])
            if (i > (minM+1)) {
                i--
            } else if (i == (minM+1)) {
                j++
                minN++
                maxN--
                minM++
                maxM--
            }
        }
        index++
    }
    return result
};

let m1 = [[1,2,3],[4,5,6],[7,8,9]]
let m2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
let m3 = [[1,2,3,4,5,6,7,8,9,10]
         ,[11,12,13,14,15,16,17,18,19,20]
         ,[21,22,23,24,25,26,27,28,29,30]
         ,[31,32,33,34,35,36,37,38,39,40]
         ,[41,42,43,44,45,46,47,48,49,50]
         ,[51,52,53,54,55,56,57,58,59,60]
         ,[61,62,63,64,65,66,67,68,69,70]
         ,[71,72,73,74,75,76,77,78,79,80]
         ,[81,82,83,84,85,86,87,88,89,90]
         ,[91,92,93,94,95,96,97,98,99,100]]

console.log(spiralOrder(m1))
console.log(spiralOrder(m2))
console.log(spiralOrder(m3))
