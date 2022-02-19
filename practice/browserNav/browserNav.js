// Design a system to track browser navigation history.

/*

input: URL and current LL of browser history
output: Link list with all urls added

write funtion that puts URL in LL

*/

const { Node,LinkedList } = require('../dataStructures/linkedLists/linked-lists')


let addBrowserNav = (browserNavLL, navURL) => {
    browserNavLL.push(navURL)
    return browserNavLL
}

const one = new Node("www.google.com");
const two = new Node("www.mozilla.com");
const three = new Node("www.microsoft.com");


one.next = two;
two.previous = one;

two.next = three;
three.previous = two;

let ll = new LinkedList(one)
ll.length = 3
ll.tail = three

console.log('ll length: ', ll.length)
console.log('ll tail value: ', ll.tail.value)
console.log('ll head: ', ll.head)
const addNavLL = addBrowserNav(ll, "www.linkedin.com")
console.log("addNavLL length",addNavLL.length)
console.log("addNavL tail value",addNavLL.tail.value)
console.log("addNavL tail",addNavLL.tail)