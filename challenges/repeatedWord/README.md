# Challenge Summary
<!-- Short summary or background information -->
Write a function that accepts a lengthy string parameter returns the first repeated word.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

- Take input and break a large string up by words
- Map each word into a map object making the key a hash of the word and value the word.
- While mapping when you encounter a collision return the value at the collision.

Time O(n) at best because yit will loop through the array completely before exiting.
Space O(n) the entire string is placed in an array to be mapped to a Map object

## Solution
<!-- Embedded whiteboard image -->
```js
const repeatedWord = lengthyString => {
  let result

  const words = lengthyString.split(' ')

  let wordsMap = new Map()

  words.forEach(word => {

    let lowerCaseWord = word.toLowerCase()

    const removeComma = lowerCaseWord.split(',')
    lowerCaseWord = removeComma[0]

    if (!wordsMap.has(lowerCaseWord)) {
      wordsMap.set(lowerCaseWord, {word:lowerCaseWord, count:1})
    } else {
      const newCount = wordsMap.get(lowerCaseWord).count + 1
      wordsMap.set(lowerCaseWord, {word:lowerCaseWord, count:newCount})
      if (!result) {
        result = `map key:${lowerCaseWord}, word:${lowerCaseWord}, count:${newCount}`
      }
    }
  })
  return result
}
```

-[MDN Map Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
