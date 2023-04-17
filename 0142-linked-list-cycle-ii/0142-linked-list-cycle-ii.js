/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
   if(!head) return null
    let seen = new Set()
    return call(head, seen)   
};
const call = (node,seen) =>{
    if(!node || !node.next) return null
    if(seen.has(node)) return node
    seen.add(node)
    return call(node.next, seen)
}