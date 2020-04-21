const romanNumerals = {
  1:'I', 2:'II', 3:'III', 4:'IV', 5:'V',
  6:'VI', 7:'VII', 8:'VIII', 9:'IX', 10:'X',
  20:'XX', 30:'XXX', 40:'XL', 50:'L', 60:'LX',
  70:'LXX', 80:'LXXX', 90:'XC', 100:'C',
  200:'CC', 300:'CCC', 400:'CD', 500:'D',
  600:'DC', 700:'DCC', 800:'DCCC', 900:'CM',
  1000:'M', 2000:'MM', 3000:'MMM', 4000:'MMMM', 5000:'MMMMM'
}

let getRomanNumeral = (interger) => {
  let array = interger.toString().split('')
  let output = ''
  array.forEach( (int,idx) => {
    let multi = 1
    if ((array.length - 1)- idx === 3 ) multi = 1000
    if ((array.length - 1)- idx === 2 ) multi = 100
    if ((array.length - 1)- idx === 1 ) multi = 10
    if (int !== '0') {
      const value = parseInt(int) * multi
      output = output + romanNumerals[value]
    }
  })
  return output
}

const input1 = 159  // CLIX
const input2 = 129  // CXXIX
const input3 = 103  // CIII
const input4 = 99  // XCIX
const input5 = 90  // XC
const input6 = 19  // XIX
const input7 = 5  // V

console.log('159 == CLIX',getRomanNumeral(input1))
console.log('129 == CXXIX',getRomanNumeral(input2))
console.log('103 == CIII',getRomanNumeral(input3))
console.log('99 == XCIX',getRomanNumeral(input4))
console.log('90 == XC',getRomanNumeral(input5))
console.log('19 == XIX',getRomanNumeral(input6))
console.log('5 == V',getRomanNumeral(input7))