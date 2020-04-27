// reverse a String 3 different ways

// method 1
// convert string to an array
// loop while string is not empty
// remove from end of the string 
// and push what is removed to a new string

// method 2
// loop through sting back ward
// and push each character onto new string

// method 3 
// convert string to an array
// loop recursivly until string is empty
// remove from end of string
// and push what is removed to a new string

/*
 * INPUT: string
 * OUTPUT: string reversed
 * 
 */

const reverseStringOne = (string) => {
  let array = string.split('')
  let outputStr = ''
  while(array.length > 0) {
    outputStr = outputStr + array.pop()
  }
  return outputStr
}

const reverseStringTwo = (string) => {
  let outputStr = ''
  for (let i = string.length-1; i>=0 ; i--) {
    // console.log('i is equal to',i)
    outputStr = outputStr + string[i]
  }
  return outputStr
}

const reverseStringThree = (string) => {
  let strValue = string
  let len = string.length-1
  let strOutput = ''
  let helper = (str) => {
    if (len < 0) return null
    strOutput = strOutput + str.slice(len)
    len--
    helper(str.slice(0,len+1))
  }
  helper(strValue)
  return strOutput
}

const input1 = "Code Fellows"
const input2 = "Tacocat"
const input3 = "A ship in port is safe, but that's not what ships are built for."

console.log('method1',reverseStringOne(input1))
console.log('method1',reverseStringOne(input2))
console.log('method1',reverseStringOne(input3))

console.log('method2',reverseStringTwo(input1))
console.log('method2',reverseStringTwo(input2))
console.log('method2',reverseStringTwo(input3))

console.log('method3',reverseStringThree(input1))
console.log('method3',reverseStringThree(input2))
console.log('method3',reverseStringThree(input3))