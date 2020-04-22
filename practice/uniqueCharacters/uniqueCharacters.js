// Code Challange 34

//Description/Problem Domain
// determine if the given string is full of unique characters.  Take a string as an argument and check if any characters are repeated.

/**
 * INPUT: "Some long string of letters, ABCDEFGH..."
 * OUTPUT: false
 * 
 */

//Edge cases:
//Spaces don't count and characters are not case sensitive

//Algorithm

/**
 * Loop through string and place characters into a Map Object, ignore spaces
 * Make character the key, and checking if the key already exist return false
 * Otherwise return true
 */

let uniqueCharacters = (string) => {
  let results = true
  const lowerCaseStr = string.toLowerCase()
  let charMap = new Map()
  let charIdx = 0

  let uniqueCharHelper = () => {
    // console.log('in helper',charIdx)
    if (charIdx === string.length) return null
    // console.log('past basecase',results)
    if (lowerCaseStr[charIdx] !== ' ') {
      // console.log('past space check',lowerCaseStr[charIdx])
      if(charMap.has(lowerCaseStr[charIdx])) {
        // console.log('in charMap Has',charIdx)
        results = false
        return null
      } else {
        // console.log('charMap set',lowerCaseStr[charIdx])
        charMap.set(lowerCaseStr[charIdx])
      }
    }
    charIdx++
    uniqueCharHelper()
  }

  uniqueCharHelper()

  return results
}

console.log('test1',uniqueCharacters("Some long string")) //false

console.log('test2',uniqueCharacters("A uniq str")) //true