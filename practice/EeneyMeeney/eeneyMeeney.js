// 

/*
 * Remove every kth count item from a list until there is one,
 * and then return the last remaining one
 *Eeney Meeney Miney Moe
 * INPUT: List, and a count
 * [ A, B, C, D, E ], 3
 * 
 * Visual:
 * [ a, b, c, d, e ]
 * c 1  2  3
 * i       2 
 * len = 5
 * [ a, b, d, e ]
 * c 3     1  2
 * i 0
 * len = 4
 * [ b, d, e ]
 * c 1  2  3
 * i       2
 * len = 3
 * [ b, d ]
 * c 1  2
 * c 3
 * i 0
 * len = 2
 * [ d ]  len = 1
 * return d
 * 
 * OUTPUT: the last remain item in list
 * D
 * 
 * Algorithm:
 * DECLARE function that accepts LinkedList and number
 *   define current set equal to linked list head
 *   define kth and set equal to 0
 *   loop over linked list while the linked list length is greater than 1
 *     set kth to be +1
 *     if current is equal to linkedList.tail
 *       set current to equal to linkedList.head
 *     else set current equal to current.next
 *     if kth is equal to number-1
 *       Remove the removeNode from the list
 *   Return linkedList.head
 *     
 * [ A, B, C, D, E ], 4
 *   1  2  3  4
 * [ A, B, C, E ]
 *   2  3  4  1
 * [ A, B, E ]
 *         1
 *   2  3  4
 * [ A, B ]
 *   1  2
 *   3  4
 * [ A ]
 */ 

const { Node,LinkedList } = require('../dataStructures/linkedLists/linked-lists')

let eeneyMeeney = (linkedList, number) => {
  let current = linkedList.head;
  let count = 1
  let index = 0
  while(linkedList.length > 1) {
    
    if (current.next === null) {
      current = linkedList.head
      index = 0
    } else {
      current = current.next;
      index++
    }
    count++

    if (count === number) {
      console.log('count',count)
      console.log('index',index)
      console.log('ll len',linkedList.length)
      console.log('current val',current.value)

      linkedList.remove(index)
      count = 1
      if ((linkedList.length-1) < index) index = 0
    }
  }
  return current.value
}

const one = new Node('A');
const two = new Node('B');
const three = new Node('C');
const dee = new Node('D');
const eee = new Node('E');

one.next = two;
two.previous = one;

two.next = three;
three.previous = two;

three.next = dee;
dee.previous = three;

dee.next = eee;
eee.previous = dee;

const ll = new LinkedList(one);
ll.length = 5
ll.tail = eee

// console.log('ll head value', ll.head.value)
// console.log('ll head next value', ll.head.next.value)
// console.log('ll tail value', ll.tail.value)
console.log('Eeney Meeney Miney Moe 3', eeneyMeeney(ll,3)) // D
console.log('Eeney Meeney Miney Moe 4', eeneyMeeney(ll,4)) // A