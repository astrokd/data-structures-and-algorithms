const {Stack} = require('../stacks-and-queues');

// -- Stacks ------------------------------
// push onto a stack
describe('push onto a stack', () => {
    const testStack = new Stack;
    it('add new value to top of stack with push ', () => {
        testStack.push('x');
        expect(testStack.storage[0]).toEqual('x');
        expect(testStack.top).toEqual('x');
        expect(testStack.storage.length).toEqual(1);
    })
})

// push multiple values onto stack
describe('push multiple onto a stack', () => {
    const testStack = new Stack;
    it('add new values to top of stack with push ', () => {
        testStack.push('x');
        testStack.push('y');
        testStack.push('z');
        expect(testStack.storage[0]).toEqual('z');
        expect(testStack.top).toEqual('z');
        expect(testStack.storage.length).toEqual(3);
    })
})

// pop off a stack
describe('pop off top stack', () => {
    const testStack = new Stack;
    it('remove values from stack with pop ', () => {
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
    it('empty stack ', () => {
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

// instantiate an empty stack
