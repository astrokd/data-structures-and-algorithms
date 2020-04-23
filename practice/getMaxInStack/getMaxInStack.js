// Write a function that returns the maximum number in the stack

/*
 * INPUT: stack object
 * OUTPUT: maximum number in stack
 *
 * Algorithm:
 * Function that accepts a stack as input
 *   define a value to hold max numbers
 *   loop over stack placing number into stack it greater then current max number
 *   return max number
 * 
 */

const { Stack } = require('../dataStructures/stacksAndQueues/stacks-and-queues')

let getMax = (stackOfNumbers) => {
  let maxNumber = stackOfNumbers.pop()

  let helper = stack => {
    if (!stack.peek()) return null
    const num = stack.pop()
    if (num > maxNumber) maxNumber = num
    helper(stack)
  }
  helper(stackOfNumbers)

  return maxNumber
}

let testStack = new Stack()
testStack.push(1)
testStack.push(3)
testStack.push(9)
testStack.push(7)
testStack.push(2)

console.log('max num in stack',getMax(testStack))