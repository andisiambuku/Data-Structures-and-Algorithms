/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function (head, val) {
	if (!head) return null
	let currentNodeLookedAt = head.next,
		previousNode = head

	while (currentNodeLookedAt) {
		if (currentNodeLookedAt.val === val) {
			currentNodeLookedAt = currentNodeLookedAt.next
			previousNode.next = currentNodeLookedAt
		} else {
			previousNode = currentNodeLookedAt
			currentNodeLookedAt = currentNodeLookedAt.next
		}
	}

	if (head.val === val) return head.next
	return head
}
