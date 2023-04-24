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
    if(head==null || head.next==null) return head; //base case 
//[1,2,3,3,4,4,5]
// c  c.n 
    let current = head;
    
    //This returns the value in the node if it's not a duplicate. 
if(current.next.val != current.val){
 current.next = deleteDuplicates(current.next); //computes the element in the node until it computes the entire list 
return current;
    
}
    
    //This reassigns pointer when there is a duplicate 
let itr = current.next;
while(itr != null && itr.val == current.val) itr = itr.next; // 
return deleteDuplicates(itr);
    
};