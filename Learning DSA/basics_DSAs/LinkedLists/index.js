const LinkedList = require('./LinkedList')
const ListNode = require('./ListNode')

let node1 = new ListNode(1)
// { data: 1, next: null }

let node2 = new ListNode(2)
// { data: 2, next: null }

node1.next = node2 // joining node2 into node1
// { data: 1, next: ListNode { data: 2, next: null } }

let LinkedList1 = new LinkedList(node1)

console.log(LinkedList1)
// console.log('linked list head', LinkedList1.head)
// console.log('linked list head data', LinkedList1.head.data)
// console.log('linked list head ', LinkedList1.head.data)
