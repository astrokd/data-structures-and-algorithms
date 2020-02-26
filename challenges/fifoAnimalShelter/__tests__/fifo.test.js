const AnimaleShelter = require('../fifo-animal-shelter');

describe('enqueue into animal shelter', () => {
  const testShelter = new AnimaleShelter;
  it('add new animal to shelter ', () => {
    testShelter.enqueue('dog');
    expect(testShelter.items[0]).toEqual('dog');
    expect(testShelter.items.length).toEqual(1);
  })
})
describe('enqueue multiple animals into shelter', () => {
  const testShelter = new AnimaleShelter;
  it('add new animals to shelter ', () => {
    testShelter.enqueue('dog');
    testShelter.enqueue('cat');
    testShelter.enqueue('cat');
    expect(testShelter.items[0]).toEqual('dog');
    expect(testShelter.items[1]).toEqual('cat');
    expect(testShelter.items[2]).toEqual('cat');
    expect(testShelter.items.length).toEqual(3);
  })
})
describe('dequeue animals from shelter', () => {
  const testShelter = new AnimaleShelter;
  testShelter.items = ['dog','cat','cat','dog','cat']
  it('remove animals ', () => {
    const a = testShelter.dequeue('cat')
    expect(a).toEqual(['cat']);
    expect(testShelter.items).toEqual(['dog','cat','dog','cat']);
    expect(testShelter.items.length).toEqual(4);
  })
})