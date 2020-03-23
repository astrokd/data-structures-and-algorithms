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
      wordsMap.set(lowerCaseWord, lowerCaseWord)
    } else {
      if (!result) {
        result = lowerCaseWord
        console.log('result---', result)
      }
    }
  })
  return result
}

const input2 = "Once upon a time, there was a brave princess who was...";

console.log('run---',repeatedWord(input2))