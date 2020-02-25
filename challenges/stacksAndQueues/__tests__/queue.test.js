const {Queue} = require('../stacks-and-queues');

// -- Queues ------------------------------
// enqueue into a queue
describe('enqueue into a queue', () => {
    const testQueue = new Queue;
    it('add new value to back of a queue ', () => {
        testQueue.enqueue('x');
        expect(testQueue.storage[0]).toEqual('x');
        expect(testQueue.front).toEqual('x');
        expect(testQueue.storage.length).toEqual(1);
    })
})

// enqueue multiple values into a queue
describe('enqueue multiple values into a queue', () => {
    const testQueue = new Queue;
    it('add new value to back of a queue ', () => {
        testQueue.enqueue('x');
        testQueue.enqueue('y');
        testQueue.enqueue('z');
        expect(testQueue.storage[0]).toEqual('x');
        expect(testQueue.front).toEqual('x');
        expect(testQueue.storage.length).toEqual(3);
    })
})

// dequeue out of a queue the expected value
describe('dequeue from front of queue', () => {
    const testQueue = new Queue;
    testArr = ['a','b','c'];
    testQueue.storage = testArr;
    testQueue.front = testArr[0];
    it('remove the value from front ', () => {
        testQueue.dequeue();
        expect(testQueue.storage[0]).toEqual('b');
        expect(testQueue.front).toEqual('b');
        expect(testQueue.storage.length).toEqual(2);
    })
})

// peek into a queue
describe('peek front item in queue', () => {
    const testQueue = new Queue;
    it('returns front of queue ', () => {
        expect(testQueue.peek()).toEqual(null);
        testArr = ['1','2','3'];
        testQueue.front = testArr[0];
        testQueue.storage = testArr;
        expect(testQueue.peek()).toEqual('1');
    })
})

// empty a queue with multiple dequeues
describe('dequeue queue until Queue is empty', () => {
    const testQueue = new Queue;
    it('empty Queue ', () => {
        testArr = ['a','b','c'];
        testQueue.front = testArr[0];
        testQueue.storage = testArr;
        expect(testQueue.dequeue()).toEqual('a');
        expect(testQueue.dequeue()).toEqual('b');
        expect(testQueue.dequeue()).toEqual('c');
        expect(testQueue.front).toEqual(null);
        expect(testQueue.storage.length).toEqual(0);
    })
})

// instantiate an empty queue