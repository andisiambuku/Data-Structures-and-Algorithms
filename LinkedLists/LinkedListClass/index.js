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
	// remove a node from a specific index
	deleteRandomIndex(index) {
		if (!this.head) {
			this.head = new Node(data)
			return
		}
		if (index === 0) {
			this.head = this.head.next
			return this.head
		}
		const previousNode = this.getNodePosition(index - 1)
		if (!previousNode || !previousNode.next) {
			return
		}
		previousNode.next = previousNode.next.next
		return this.head
	}

	// remove the first node
	deleteFirstNode() {
		if (!this.head) {
			return
		}
		this.head = this.head.next
		return this.head
	}

	//  remove the last node
	deleteLastNode() {
		if (!this.head) {
			return null
		}

		if (!this.head.next) {
			this.head = null
			return
		}
		let previous = this.head
		let tail = this.head.next

		while (tail.next !== null) {
			previous = tail
			tail = tail.next
		}

		previous.next = null
		return this.head
	}
}

let firstNode = new ListNode(1)
let linkedList = new LinkedList(firstNode)

linkedList.addToFirstPosition(2)
console.log(linkedList)

linkedList.addToAnyPosition(100, 0)
console.log(linkedList)

linkedList.addToTail(48)
console.log(linkedList)

linkedList.deleteFirstNode()
console.log(linkedList)

linkedList.deleteRandomIndex(0)
console.log(linkedList)

linkedList.deleteLastNode()
console.log(linkedList)
