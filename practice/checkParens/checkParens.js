// Check if string has valid opening and closing (), [], and {}.

/*
 * INPUT: a string with '([{}])'
 * OUTPUT: a boolean: true 
 *
 * Algorithm:
 * Function that accepts a string of just opening and closing; ()[]{}
 *   define an empty array
 *   if first character in string is a closing ),], or } return false
 *     else add first char of string to array
 *   Loop over string
 *     if opening (,[, or { place into array
 *     if closing ),], or } 
 *       check if last char in array is a matching opening
 *         then remove opening from array
 *       if not a match return false
 *  
 * test 1; str = '([{}])' ,   len = 6
 * arr = [ ]
 *         ( [ { } ] )
 * true
 * 
 * test 2; str '[(])' ,   len 4
 * arr [ [, ( ]
 *       [  ( ]
 * false
 * 
 */

let checkParens = (string) => {
  let array = []
  const length = string.length

  if (string[0] === ')' || string[0] === ']' || string[0] === '}' ) {
    return false
  } else {
    array.push(string[0])
  }
  
  for (let i = 1; i < length; i++) {
    if (string[i] === ')') {
      if (array[array.length-1] !== '(') {
        return false
      } else {
        array.pop()
      }
    }
    if (string[i] === ']') {
      if (array[array.length-1] !== '[') {
        return false
      } else {
        array.pop()
      }
    }
    if (string[i] === '}') {
      if (array[array.length-1] !== '{') {
        return false
      } else {
        array.pop()
      }
    }
    if (string[i] === '(' || string[i] === '[' || string[i] === '{' ) {
      array.push(string[i])
    } 
  }
  if (array.length > 0) return false
  return true
}

console.log('check parens1: true; ', checkParens('([{}])'))
console.log('check parens2: false; ', checkParens('[(])'))
console.log('check parens2b: false; ', checkParens('[()]{'))
console.log('check parens3: true; ', checkParens('[(())]([]){{[]}}'))

let checkParensMap = (string) => {
  let array = []
  let map = new Map()
  let set = new Set(['(','[','{'])
  const length = string.length

  map.set(')','(')
  map.set(']','[')
  map.set('}','{')

  if (map.has(string[0])) {
    return false
  } else {
    array.push(string[0])
  }
  
  for (let i = 1; i < length; i++) {
    if (map.has(string[i])) {
      if (array[array.length-1] !== map.get(string[i])) {
        return false
      } else {
        array.pop()
      }
    }
    
    if (set.has(string[i])) {
      array.push(string[i])
    } 
  }
  if (array.length > 0) return false
  console.log("array:",array)
  return true
}

console.log('check parens map1: true; ', checkParensMap('([{}])'))
console.log('check parens map2: false; ', checkParensMap('[(])'))
console.log('check parens map2b: false; ', checkParensMap('[()]{'))
console.log('check parens map3: true; ', checkParensMap('[(())]([]){{[]}}'))