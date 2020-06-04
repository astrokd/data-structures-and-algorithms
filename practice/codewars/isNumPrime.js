// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript
// https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript#:~:text=function%20isPrime(num)%20%7B%20if,return%20false%3B%20%7D%20%7D%20console.

function isPrime(num) {
  // prime numbers are greater than 1
  if (num <= 1) return false

  // define starter list of prime numbers
  const primes = [2,3,5,7,11,13,17,19,23]
  // place list in a a Set Object
  let primeSet = new Set(primes)
  // in my defined list
  if (primeSet.has(num)) return true
  // prime numbers are not divisable by a prime number in my list
  for (let p of primeSet) {
    if (num%p === 0) return false
  }
  /* prime numbers are only diviable but 1 and them selves.
   * calculate primes after last prime in list and 
   * check if modulus === 0
   */
  for(let i = primes[primes.length-1]+1; i <= Math.sqrt(num); i++) {
    if(num%i === 0) return false
  }
  // if 
  return true
}

console.log('is prime (0)',isPrime(0)) //false
console.log('is prime (1)',isPrime(1)) //false
console.log('is prime (2)',isPrime(2)) //true
console.log('is prime (3)',isPrime(3)) //true
console.log('is prime (5)',isPrime(5)) //true
console.log('is prime (7)',isPrime(7)) //true
console.log('is prime (11)',isPrime(11)) //true
console.log('is prime (73)',isPrime(73)) //true
console.log('is prime (75)',isPrime(75)) //false
console.log('is prime (-1)',isPrime(-1)) //false
console.log('is prime (503)',isPrime(503)) //true
console.log('is prime (500)',isPrime(500)) //false
console.log('is prime (943)',isPrime(943)) //false
console.log('is prime (382888447)',isPrime(382888447)) //false