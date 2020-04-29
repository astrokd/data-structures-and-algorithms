// Write a function that detects is a linked list is a palindrome

/*
 * INPUT: Linked List
 * OUTPUT: boolean
 *
 * {a}->{b}->{a} => true
 * {c}->{d}->{e} => false
 * 
 * For single linked list:
 *   Convert linked list to array
 *   check if array length is a even number, return false if not
 *   loop over array 
 *     and compare front of array to back of array working toward the middle
 *   
 * For doubly linked list:
 *   loop through linked list
 *     and compare head index to tail index working toward the middle
 *   
 * BigO  time: O(n)  space: O(n)
 */

const { Node, LinkedList } = require('../dataStructures/linkedLists/linked-lists')

let checkSLLPalindrome = (linkedList) => {
  let array = []
  let convertLLToArray = (node) => {
    if (node === null) return null
    array.push(node.value)
    convertLLToArray(node.next)
  }
  convertLLToArray(linkedList.head)
  console.log('arr',array)
  const len = array.length
  const arrayMid = Math.floor(len/2)
  console.log('arrayMid',arrayMid)

  let i = 0
  let j = len-1

  while(j !== arrayMid) {

    console.log('i', i)
    console.log('j', j)
    if (array[i] !== array[j]) return false
    i++
    j--
  }

  return true
}

const test1 = new LinkedList()
const testNode1 = new Node('a')
const testNode2 = new Node('b')
const testNode2a = new Node('b')
const testNode3 = new Node('a')
testNode1.next = testNode2
testNode2.next = testNode2a
testNode2a.next = testNode3

test1.head = testNode1

console.log('test1 check for palindrome',checkSLLPalindrome(test1))

const test2 = new LinkedList()
const testNode1b = new Node('c')
const testNode2b = new Node('d')
const testNode3b = new Node('e')
testNode1b.next = testNode2b
testNode2b.next = testNode3b

test2.head = testNode1b

console.log('test2 check for palindrome',checkSLLPalindrome(test2))
