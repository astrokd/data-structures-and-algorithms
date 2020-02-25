const {Stack} = require('../stacks-and-queues');

// -- Stacks ------------------------------
// push onto a stack
describe('push onto a stack', () => {
    const testStack = new Stack;
    it('add new value to top of stack with push ', () => {
        testStack.push('x');
        expect(testStack.storage.head.value).toEqual('x');
        expect(testStack.top.value).toEqual('x');
        expect(testStack.storage.next).toBeUndefined();
    })
})

// push multiple values onto stack
describe('push multiple onto a stack', () => {
    const testStack = new Stack;
    it('add new values to top of stack with push ', () => {
        testStack.push('x');
        testStack.push('y');
        testStack.push('z');
        expect(testStack.storage.head.value).toEqual('z');
        expect(testStack.top.value).toEqual('z');
    })
})

// pop off a stack
describe('pop off top stack', () => {
    const testStack = new Stack;
    xit('remove values from stack with pop ', () => {
        testArr = ['a','b','c'];
        testStack.top = testArr[0];
        testStack.storage = testArr;
        expect(testStack.pop()).toEqual('a');
        expect(testStack.top).toEqual('b');
        expect(testStack.storage.length).toEqual(2);
        expect(testStack.storage).toEqual(['b','c']);
    })
})

// empty stack with multiple pops
describe('pop off top of stack until stack is empty', () => {
    const testStack = new Stack;
    xit('empty stack ', () => {
        testArr = ['a','b','c'];
        testStack.top = testArr[0];
        testStack.storage = testArr;
        expect(testStack.pop()).toEqual('a');
        expect(testStack.pop()).toEqual('b');
        expect(testStack.pop()).toEqual('c');
        expect(testStack.top).toEqual(null);
        expect(testStack.storage.length).toEqual(0);
    })
})

// peek next item on stack
describe('peek top item on stack', () => {
    const testStack = new Stack;
    xit('returns current next item in stack ', () => {
        expect(testStack.peek()).toEqual(null);
        testArr = ['1','2','3'];
        testStack.top = testArr[0];
        testStack.storage = testArr;
        expect(testStack.peek()).toEqual('1');
    })
})


// instantiate an empty stack
describe('instantiate empty stack', () => {
    const testStack = new Stack;
    xit('returns its emptiness  ', () => {
        expect(testStack.top).toEqual(null);
        expect(testStack.storage[0]).toBeUndefined();
        expect(testStack.storage.length).toEqual(0);
    })
    xit('isEmpty() also returns emptiness ', () => {
        expect(testStack.isEmpty()).toEqual(true);
    })
})