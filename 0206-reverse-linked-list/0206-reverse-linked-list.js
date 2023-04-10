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
    
    //iterative approach
//     let curr = head
//     let prev = null
    
//     while(curr !== null){
//         let next = curr.next
//         curr.next = prev
//         prev = curr
//         curr = next
//     } 
//     return prev;
    
    // recursive approach
    if(head === null) return previous
    const next = head.next
    head.next = previous
    return reverseList(next, head)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    // how 
    /*
    Iterative method to reverse linked list
    a method takes in the next node
    swaps it with the current node
    the new ne
    */

    // let current = head
    // let previous = null
    // let next = null

    // while(current != null){
    //     next = current.next
    //     current.next = previous
    //     previous = current
    //     current = next
        
    // }
    // return previous

    // Space complexity => O(n)
    // Time Complexity => O(n)

   
//      if(!head) return previous
    
//     let next = head.next
    
//     head.next = previous
//     return reverseList(next,head)








};