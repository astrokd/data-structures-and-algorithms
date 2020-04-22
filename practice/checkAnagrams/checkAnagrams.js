// Identify if a string is anagrams (do 2 strings contain the same letters, ignore spaces and capitals)

/*
 * INPUT: 2 strings 'some string' 'some other string'
 * OUTPUT: true or false
 * 
 * Using a hash map as my datastructure
 * 
 * Algorithm:
 *   Reduce stings to just characters, no spaces or capitals
 *   compare 2 strings if they are not the same length return false
 *   Loop through first string and place it into a hashMap and set value to count of character
 *   Loop through second string and place it into it's own hashMap
 *     While looping compare character from first string to first hashMap
 *       if character doesn't exist in first hashMap return false
 *   Loop through first hashMap and compare with second hashMap
 *       if the character count of the first hash map doesn't equal the second return false
 *   else return true
 * 
 * Big O complexity:
 * time O(n)  3 separate loops
 * space 0(n)  creating to hashMaps
 */

let checkAnagrams = (string1, string2) => {
  let result = true
  const array1 = string1.toLowerCase().split('').filter(char => char !== ' ')
  const array2 = string2.toLowerCase().split('').filter(char => char !== ' ')

  let map1 = new Map()
  let map2 = new Map()
  // check if length is the same
  console.log('checking length')
  if (array1.length !== array2.length) {
    return false
  } else {
    // add first string to map
    array1.forEach( char => {
      if (!map1.has(char)) {
        map1.set(char,1)
      } else {
        map1.set(char, map1.get(char)+1)
      }
    })
    console.log('checking string2 has characters string1 does not')
    // add second string to map and check if characters exist in first
    array2.forEach( char => {
      if (!map2.has(char)) {
        map2.set(char, 1)
      } else {
        map2.set(char, map2.get(char)+1)
      }
      if (!map1.has(char)) result = false
    })
    if (!result) return result
    
    // compare hash map values
    console.log('checking string1 and string2 have the same count of characters')
    for( let [key, value] of map1) {
      if (value !== map2.get(key)) {
        result = false
      }
    }
  }
  return result
}

const string1 = 'Eleven plus two'
const string2 = 'Twelve plus one'

const string3 = 'Clint Eastwood'
const string4 = 'Old West Action'

const string5 = 'Software'
const string6 = 'Swear often'

const string7 = 'Astronomers'
const string8 = 'Moon starers'

console.log('test1', checkAnagrams(string1,string2)) // true
console.log('test2', checkAnagrams(string3,string4)) // true
console.log('test3', checkAnagrams(string5,string6)) // false
console.log('test4', checkAnagrams(string7,string8)) // true
