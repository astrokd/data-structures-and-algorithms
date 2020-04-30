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
  let fibSeq = [0,1]
  // console.log('start fibSeq',fibSeq)
  let value = 0
  let i = 0
  let j = 1
  if (number <= 2) return fibSeq[number-1]
  for (let idx = 2; idx <= number-1 ;idx++) {
    // console.log('idx',idx)
    i = idx-2
    j = idx-1
    value = fibSeq[j]+fibSeq[i]
    fibSeq.push(value)
  }
  // console.log('fibSeq',fibSeq)
  return value
}

console.log('fibonacci try one 1',getFibonacciInt(1))  //0
console.log('fibonacci try one 2',getFibonacciInt(2))  //1
console.log('fibonacci try one 3',getFibonacciInt(3))  //1
console.log('fibonacci try one 4',getFibonacciInt(4))  //2
console.log('fibonacci try one 5',getFibonacciInt(5))  //3
console.log('fibonacci try one 6',getFibonacciInt(6))  //5
console.log('fibonacci try one 11',getFibonacciInt(11))  //55
console.log('fibonacci try one 30',getFibonacciInt(30))  //514229
console.log('fibonacci try one 60',getFibonacciInt(60))  //956722026041