let leftJoin = (mapLeft,mapRight) => {
  let result = []
  for (let [key, value] of mapLeft) {
    console.log(key + ' : ' + value)
    let array = [key,value]
    if (mapRight.has(key)) {
      array.push(mapRight.get(key))
    } else {
      array.push(null)
    }
    result.push(array)
  }
  return result
}


const mapL = new Map([
  ['a',2],
  ['b',4],
  ['f',5],
])
const mapR = new Map([
  ['a',3],
  ['b',4],
  ['r',8],
])

// console.log('left join:',leftJoin(mapL,mapR))

module.exports = leftJoin