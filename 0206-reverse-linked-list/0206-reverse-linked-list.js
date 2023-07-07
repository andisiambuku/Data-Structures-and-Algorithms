/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
* @param {ListNode} head

 * @return {ListNode}
 */
var reverseList = function(head,previous=null) {
 if(head === null) return previous
    let next = head.next
    head.next = previous
    return reverseList(next, head)
    

};