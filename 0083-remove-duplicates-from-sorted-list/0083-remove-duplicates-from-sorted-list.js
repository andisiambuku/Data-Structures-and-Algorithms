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
var deleteDuplicates = function(head) {
    if(!head) return null
   
    
    while(head.next &&head.val === head.next.val){
            head.next = head.next.next
    }
    head.next = deleteDuplicates(head.next)  
    return head
 
};