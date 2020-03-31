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

//Pseudo
/**
 * DEFINE uniqueCharacters(String)
 *    var results = true
 *    var array = String.split('')
 *    var charMap = New Map Object
 *    for(i=0,i<array.length - 1 || !resutls ; i++) {
 *      if (array[i] !== ' ') {
 *        const letter = array[i].lowercase()
 *        if(charMap.has(letter)) {
 *          results = false
 *        } else {
 *          charMap.set(letter)
 *        }
 *      }
 *    })
 *    return results
 * }
 */

 //Visual
 /** INPUT: String = "Some long string"
  * results = false
  * array = [S,o,m,e, ,l,o,n,g,...]
  * charMap = {s,o,m,e,l,o}
  * letter = 
  * return false
  */

//Verification

/**
 * O of time O(n) worst case, O(2) best case
 * O of space is O(n)
 */

 //Code
 let uniquesCharacters = (string) => {
   let results = true
   const array = string.toLowerCase().split('')
   let charMap = new Map()

   for(let i=0; i<array.length - 1 ; i++) {
     if (array[i] !== ' ') {
       const letter = array[i]
       if(charMap.has(letter)) {
         results = false
         break
       } else {
         charMap.set(letter)
       }
     }
   }

   return results
 }

 console.log('test1',uniquesCharacters("Some long string"))

 console.log('test2',uniquesCharacters("A uniq str"))