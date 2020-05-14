// Eeney Meeney Miney Moe

/*
 * Remove every kth count item from a list until there is one,
 * and then return the last remaining one
 *
 * INPUT: List, and a count
 * [ A, B, C, D, E ], 3
 * 
 * Visual:
 * [ a, b, c, d, e ]
 *   1  2  3
 * [ a, b, d, e ]
 *   3     1  2
 * [ b, d, e ]
 *   1  2  3
 * [ b, d ]
 *   1  2
 *   3
 * [ d ]  length = 1
 * return d
 * 
 * OUTPUT: the last remain item in list
 * D
 * 
 * Algorithm:
 * DECLARE function that accepts LinkedList and number
 *   define current as a node in the link list
 *   define removeNode and beforeNode
 *   define kth and set equal to 0
 *   set current equal to linked list head
 *   loop over linked list while the linked list length is greater than 1
 *     set kth to be +1
 *     if current is equal to linkedList.tail
 *       set current to equal to linkedList.head
 *     else set current equal to current.next
 *     if kth is equal to number-1
 *       set beforeNode to equal current.previous
 *       set removeNode to equal current
 *       set current equal to current.next
 *       Remove the removeNode from the list
 *         set linkedList length to -1
 *   Return linkedList.head
 *     
 *      
 * 
 */ 

const { Node,LinkedList } = require('../dataStructures/linked-lists')

