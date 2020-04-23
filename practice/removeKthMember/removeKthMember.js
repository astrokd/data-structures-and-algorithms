// Eeney Meeney Miney Moe - aka remove the kth members until there is one

/*
 * INPUT: and Linked List and number
 * OUTPUT: a string of the last item in a list
 *
 * Algorithm:
 * Loop over list
 *   if the length of the list is equal to 1 return the last member
 *   Count the number of member equal to the inputed number
 *   When you count and the input numbers are equal remove that member from the list
 *     start the count over
 *   when reaching the end of the list continue counting at beginning
 *   
 * BigO:  time O(n)  space O(n)
 * 
 * Visualize: number = 4
 * 100 - 103 - 145 - 123 - 133 - 110 - 121
 *                   c4
 *                   i4
 * 100 - 103 - 145 - 133 - 110 - 121
 *  c4
 *  i1
 * 103 - 145 - 133 - 110 - 121
 *                   c4
 *                   i4
 * 103 - 145 - 133 - 121
 *             c4
 *             i3
 * 103 - 145 - 121
 *              c4
 *              i3
 * 103 - 145
 *        c4
 *        i2
 * 103
 *  c1
 *  i2
 * return 103
 */
const { Node,LinkedList } = require('../dataStructures/linkedLists/linked-lists')

let removeKth = (list, number) => {
  let result
  let count = 1
  let index = 0

  let helper = (item) => {
    if (list.length === 1) {
      result = item.value
      return null
    }
    if (count === number) {
      list.remove(index)
      count = 1
    } else {
      count++
    }
    if (item === list.tail) {
      index = 0
    } else {
      index++
    }
    if (index === 0) {
      helper(item.head)
    } else {
      helper(item.next)
    }
  }

  helper(list.head)
  return result
}