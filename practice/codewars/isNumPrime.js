function isPrime(num) {
  // define starter list of prime numbers
  const primes = [2,3,5,7,11,13,17,19,23]
  // place list in a a Set Object
  let primeSet = new Set(primes)
  // check for prime
  // greater than 1
  if (num > 1) {
    // in my defined list
    if (primeSet.has(num)) return true
    // not even
    if (num%2 === 1) {
      // divisable by a prime number in my list
      for (let p of primeSet) {
        if (num%p === 0) return false
      }
      // calculate primes after last prime in list and check if modulus === 0

    } else { return false }
  } else { return false }
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