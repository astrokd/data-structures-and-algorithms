/**
 * @param {string} s
 * @return {number}
 */
// loop over the string and count Rs and Ls
// when R and L count are equal increment total count
// reset R and L counts to 0
var balancedStringSplit = function(s) {
  let countR = 0
  let countL = 0
  let totalCount = 0
  for (let i = 0;i<s.length; i++) {
      if (s[i] === 'R') {countR++}
      if (s[i] === 'L') {countL++}
      if (countR > 0 && countL > 0) {
          if (countR === countL) {
              totalCount++
              countR=0
              countL=0
          } 
      }
  }
  return totalCount
};

console.log('RLRRLLRLRL',balancedStringSplit("RLRRLLRLRL")) //4