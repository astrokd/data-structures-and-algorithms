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
describe('dequeue animals from shelter until there none', () => {
  const testShelter = new AnimaleShelter;
  testShelter.items = ['dog','cat','cat','dog','cat']
  it('remove all cats ', () => {
    const aCat = testShelter.dequeue('cat')
    const bCat = testShelter.dequeue('cat')
    const cCat = testShelter.dequeue('cat')
    const dNoCat = testShelter.dequeue('cat')
    expect(aCat).toEqual(['cat']);
    expect(bCat).toEqual(['cat']);
    expect(cCat).toEqual(['cat']);
    expect(dNoCat).toEqual('No cat in Shelter');
    expect(testShelter.items).toEqual(['dog','dog']);
    expect(testShelter.items.length).toEqual(2);
  })
  it('remove all dogs ', () => {
    const aDog = testShelter.dequeue('dog')
    const bDog = testShelter.dequeue('dog')
    const NoDog = testShelter.dequeue('dog')
    expect(aDog).toEqual(['dog']);
    expect(bDog).toEqual(['dog']);
    expect(NoDog).toEqual('No dog in Shelter');
    expect(testShelter.items.length).toEqual(0);
  })
})