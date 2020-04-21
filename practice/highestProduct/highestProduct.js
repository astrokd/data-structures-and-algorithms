const input1 = [12, 36, 4, 10, 0, -3, -47, -100]
const input2 = [-3, -47, -100, 4]
const input3 = [12, 36, 3]

let highestProduct = (array) => {
  let output
  let highestPositive = [1,1,1]
  let highestNegative = [-1,-1]

  array.forEach((int) => {
    
    if(int > 0) {
      if(int > highestPositive[0]) {
        highestPositive[2] = highestPositive[1]
        highestPositive[1] = highestPositive[0]
        highestPositive[0] = int
      }
      else if(int > highestPositive[1]) {
        highestPositive[2] = highestPositive[1]
        highestPositive[1] = int
      }
      else if(int > highestPositive[2]) {
        highestPositive[2] = int
      }
    }
    if(int < 0) {
      if(int < highestNegative[0]) {
        highestNegative[1] = highestNegative[0]
        highestNegative[0] = int
      }
      else if(int < highestNegative[1]) {
        highestNegative[1] = int
      }
    }
  })
  //compare 
  const posProduct = highestPositive[0]*highestPositive[1]*highestPositive[2]
  const posnegProduct = highestPositive[0]*highestNegative[0]*highestNegative[1]

  if (posProduct>posnegProduct) output = posProduct
  if (posProduct<posnegProduct) output = posnegProduct

  return output
}

console.log('product1',highestProduct(input1))  //169200
console.log('product2',highestProduct(input2))  //18800
console.log('product3',highestProduct(input3))  //1296