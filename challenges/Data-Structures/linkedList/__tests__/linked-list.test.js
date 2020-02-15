const LinkedList = require('../linked-list.js');

describe('linked-list insert', () => {
    test('should return the index of the sorted array equal to the searchValue', () => {
        // const node = new Node(2,null);
        const linkedList = new LinkedList(null);
        linkedList.insert(5);
        expect(linkedList.head.value).toEqual(5);
        expect(linkedList.head.next.next).toEqual(null);
    });
});
