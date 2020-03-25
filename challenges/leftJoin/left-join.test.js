const leftJoin = require('./left-join')

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

describe('Left Join testing', () => {
  const leftJoinResult = leftJoin(mapL,mapR);
  const testResult = [ ['a',2,3], ['b',4,4], ['f',5,null] ];
  it('return arry of left join', () => {
    expect(leftJoinResult).toEqual(testResult);
  })
})