/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 9 rows, 9 columns, 9 cubes
//.    /  A  \  /  B  \  /  C  \
//     0  1  2  3  4  5  6  7  8  i
// / 0 0,0.     0,3.     0,6.
// A 1             
// \ 2     2,2.     2,5.     2,8
// / 3 3,0      3,3      3,6 
// B 4   
// \ 5     5,2      5,5      5,8
// / 6 6,0      6,3      6,6 
// C 7   
// \ 8     8,2      8,5      8,8
//   j
//
// board is 9 arrays representing ea of the 9 rows
//
// define i as columns and j as rows
// hash map rows if dup return false
//.  while (j < 9) {
//
// }
// hash map columns if dup return false
// hash map 3x3 cubes if duo return false
// return true
// 
var isValidSudoku = function(board) {
    let i = 0  // columns
    let j = 0  // rows
    let k = 0  // each cell
    const set = new Set()

    // let helper = (input,r,s) => {
    // }

    while (k < 80) {  // check row for dups
        const tmp = board[j][i]
        if (tmp != ".") {
            if (set.has(tmp)) {
                return false
            } else {
                set.add(tmp)
            }  
        }
        
        if (i == 8) {
            i=0
            set.clear()
            j++
        } else {
            i++
        }
        
        k++
    }
    k=0
    i=0
    j=0
    set.clear()
    while (k < 80) {  // check column for dups
        const tmp = board[j][i]
        if (tmp != ".") {
            if (set.has(tmp)) {
                return false
            } else {
                set.add(tmp)
            }  
        }
        
        if (j == 8) {
            i++
            set.clear()
            j=0
        } else {
            j++
        }
        
        k++
    }
    k=1
    i=0
    j=0
    set.clear()
    // check cubes for dups
    while (k < 81) {  
        const tmp = board[j][i]
        if (tmp != ".") {
            if (set.has(tmp)) {
                return false
            } else {
                set.add(tmp)
            }  
        }
        
        if (j == 2 || j == 5 || j == 8 ) {
            i++
            j -= 2
        } else {
            j++
        }
        if (k%9 == 0) { set.clear() }

        if (k == 27) { 
            j=3
            i=0
        }
        if (k == 54) { 
            j=5
            i=0
        }
        
        k++
    }
        
    return true
};

const b1 = [["5","3",".",".","7",".",".",".","."]
           ,["6",".",".","1","9","5",".",".","."]
           ,[".","9","8",".",".",".",".","6","."]
           ,["8",".",".",".","6",".",".",".","3"]
           ,["4",".",".","8",".","3",".",".","1"]
           ,["7",".",".",".","2",".",".",".","6"]
           ,[".","6",".",".",".",".","2","8","."]
           ,[".",".",".","4","1","9",".",".","5"]
           ,[".",".",".",".","8",".",".","7","9"]]

console.log("isValidSudoku:",isValidSudoku(b1))
