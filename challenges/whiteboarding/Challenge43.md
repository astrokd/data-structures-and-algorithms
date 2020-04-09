# Problem Domain

Write a function to convert a interger to its roman numeral equivelent
INPUT: Positive numbers less than 5000, input is a string
OUTPUT: String roman numeral

data structure: array

romanNumerals = {
1:	I,   2:	II,  3:	III,   4:	IV,  5:	V,  ... 
70:	LXX,  80:	LXXX,  90:	XC,  100:	C, ...
}

'159' 
  0   1   2
['1','5','9']
  3   2   1

100 = C
50 = L
9 = IX

returnString = 'CLIX'

### Edge cases
'159' = 'CLIX'   === [100,50,9]  array length = 3
'19' = 'XIX'
'90' = 'XC'
'99' = 'XCIX'
'103' = 'CIII'

## Algorithm
Function that takes interger as agrumant
  Split interger into separate indexs in array
  loop over array
    add this many zeros to interger index - array length -1 
    get value from from romanNumeral object and add it to the result
  Output result

129
1,2,9
0,1,2
1 = 0 + 0
159 - 59 = 100
length = 3 
[100,50,9]

1000 len 4 
0  3  m = 1000
1  2  m = 100
2  1  m = 10
3  3  m

## Pseudo Code
DECLARE getRomanNumeral (interger)
  define array <== interger.toString().split('')
  define output <== ''
  array.foreach (int,idx)
    define multiplier = 1
    if (length-1 - idx === 3) multiplier = 1000
    if (length-1 - idx === 2) multiplier = 100
    if (length-1 - idx === 1) multiplier = 10
    if (int !== '0')
      value = parseInt(int) * multiplier
      output += romanNumeral.values(value)
  
  return output

3490
'3490'
['3','4','9','0']
len = 4
int = '0'
idx = 3
mult = 1
value = 9 * 1 = 90
'MMM', 'CD', 'XC'

output = 'MMMCDXC'

## CODE

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
      output += romanNumeral.get(value)
    }
  })
  return output
}

## Big O

time O(n)
space O(n)
    
### Visualize
 
int = 19   o = XIX
[1,9]
len = 2
m = 10
10  === X
9   === IX
'XIX'

          