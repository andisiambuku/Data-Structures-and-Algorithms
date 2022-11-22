class ListNode {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head
	}
	getNodePosition(index) {
		let counter = 0
		let node = this.head
		// 1 -> 2 -> 3 -> 4 -> 5 -> null

		while (node) {
			if (counter === index) {
				return node
				//return the node we were looking for because the index matches the counter
			}
			node = node.next
			counter += 1
		}
		return null
	}

	//a method to add node to the first position
	addToFirstPosition(data) {
		let nodeToInsert = new ListNode(data)

		nodeToInsert.next = this.head
		this.head = nodeToInsert
		return this.head
	}
	//a method to add node to arbitrary(random) position/based on index
	addToAnyPosition(data, index) {
		if (!this.head) {
			let nodeToInsert = new ListNode(data)
			this.head = nodeToInsert
			return this.head
		}
		if (index === 0) {
			this.addToFirstPosition(data)
			return this.head
		}
		let nodeToInsert = new ListNode(data)
		// nodeToInsert = 4
		// 1 -> 4 -> 2 -> 3

		// previousNode = 1
		// previousNode.next = 2
		// 4 -> 2
		let previousNode = this.getNodePosition(index - 1)

		nodeToInsert.next = previousNode.next
		previousNode.next = nodeToInsert
		return this.head
	}

	//a method to add node to node to last position/tail
	addToTail(data) {
		if (this.head === null) return this.addToFirstPosition(data)
		let nodeToInsert = new ListNode(data)
		let node = this.head
		while (node.next != null) {
			node = node.next
		}
		node.next = nodeToInsert
		return this.head
	}
}

let firstNode = new ListNode(1)
let linkedList = new LinkedList(firstNode)
console.log(linkedList)

// linkedList.addToFirstPosition(2)
// console.log(linkedList)

linkedList.addToTail(48)
console.log(linkedList)

// linkedList.addToFirstPosition(0)
// console.log(linkedList)

// linkedList.addToAnyPosition(10, 1)
// linkedList.addToAnyPosition(100, 0)
// linkedList.addToAnyPosition(4, 3)

// console.log(linkedList)
// console.log(linkedList.head)
// console.log(linkedList.head.next)
// console.log(linkedList.head.next.next)
