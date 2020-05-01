// Generate the nth Fibonacci number, 2 different ways.

/*
 * Fibonacci Sequence
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
 * 1  2  3  4  5  6  7  8   9   10  11
 * 
 * Input: index number of the fibonacci sequence
 * Output: number at the index in the sequence
 * 
 * fib = [0,1]
 *      i 0 1
 * iNum = 2
 * fibNum = fib[iNum-1] + fib[iNum-2]
 * 
 * generate fibonacci sequence until input number
 * return the last number in the generated sequence
 * 
 * algorithm:
 * declare function that takes number
 * define base fibSeq equal [0,1]
 * set i equal to 2
 * while array of fib seq length not equal to inputNum
 *   push into array fib[i-1] + fib[i-2]
 * return last value in array of fib seq
 * 
 */

let getFibonacciInt = (number) => {
  let fibSeq = [1,1]
  let value = 0
  if (number <= 2) return fibSeq[number-1]
  for (let idx = 2; idx <= number-1 ;idx++) {
    value = fibSeq[idx-1]+fibSeq[idx-2]
    fibSeq.push(value)
  }
  return value
}

let getFibonacciRecur = (number) => {
  let fibSeq = [1,1]
  let value = 0
  if (number <= 2) return fibSeq[number-1]
  let helper = (index) => {
    if (index === number) return null
    value = fibSeq[index-1]+fibSeq[index-2]
    fibSeq.push(value)
    index++
    helper(index)
  }
  helper(2)
  return value
}

console.log('fibonacci try one 1',getFibonacciInt(1))  //1
console.log('fibonacci try one 2',getFibonacciInt(2))  //1
console.log('fibonacci try one 3',getFibonacciInt(3))  //2
console.log('fibonacci try one 4',getFibonacciInt(4))  //3
console.log('fibonacci try one 5',getFibonacciInt(5))  //5
console.log('fibonacci try one 6',getFibonacciInt(6))  //8
console.log('fibonacci try one 11',getFibonacciInt(11))  //89
console.log('fibonacci try one 30',getFibonacciInt(30))  //832040
console.log('fibonacci try one 60',getFibonacciInt(60))  //1548008755920

console.log('fibonacci try two 1',getFibonacciRecur(1))  //1
console.log('fibonacci try two 2',getFibonacciRecur(2))  //1
console.log('fibonacci try two 3',getFibonacciRecur(3))  //2
console.log('fibonacci try two 4',getFibonacciRecur(4))  //3
console.log('fibonacci try two 5',getFibonacciRecur(5))  //5
console.log('fibonacci try two 6',getFibonacciRecur(6))  //8
console.log('fibonacci try two 11',getFibonacciRecur(11))  //89
console.log('fibonacci try two 30',getFibonacciRecur(30))  //832040
console.log('fibonacci try two 60',getFibonacciRecur(60))  //1548008755920