// Repeated word using map

const repeatedWord = lengthyString => {
  let result
  // split string into an array of words
  const words = lengthyString.split(' ')
  // create Map Object to place words in
  let wordsMap = new Map()
  //Loop over words array and place into wordsMap
  words.forEach(word => {
    // set all words to lowercase
    let lowerCaseWord = word.toLowerCase()
    // remove commas
    const removeComma = lowerCaseWord.split(',')
    lowerCaseWord = removeComma[0]
    //check if word is not in Map object 
    // if it is not place in Map object
    // if it is assign word to result
    if (!wordsMap.has(lowerCaseWord)) {
      wordsMap.set(lowerCaseWord, {word:lowerCaseWord, count:1})
    } else {
      const newCount = wordsMap.get(lowerCaseWord).count + 1
      wordsMap.set(lowerCaseWord, {word:lowerCaseWord, count:newCount})
      // if this is the first duplicate word add it to the result that is returned
      if (!result) {
        result = `map key:${lowerCaseWord}, word:${lowerCaseWord}, count:${newCount}`
      }
    }
  })
  return result
}

const input1 = "Once upon a time, there was a brave princess who was...";

const input2 = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."

const input3 = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."

console.log('input1 run---',repeatedWord(input1))

console.log('input1 run---',repeatedWord(input2))

console.log('input1 run---',repeatedWord(input3))