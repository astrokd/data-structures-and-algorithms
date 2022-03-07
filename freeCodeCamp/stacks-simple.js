/* 
Stack - Last in First out
*/

// functions: push, pop, peek, length

let letters = []
let word = "racecar"
let rword = ""

letters = [...word]

// for (var i = 0; i < word.length; i++) {
//     letters.push(word[i]);
// }

letters.forEach(char => 
    rword += char
)

// for (var i = 0; i < word.length; i++) {
//     rword += letters.pop();
// }

rword === word ? console.log(word + " is a palindrome") 
    : console.log(word + " is not a palindrome")

// if (rword === word) {
//     console.log(word + " is a palindrome")
// }
// else {
//     console.log(word + " is not a palindrome")
// }