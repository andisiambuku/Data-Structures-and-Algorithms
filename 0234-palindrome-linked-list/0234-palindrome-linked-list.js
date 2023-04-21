/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head.next === null || head === null) return true
    
   let slow = head
   let fast = head
   
   
   //condition for the hare
   while(fast && fast.next){
       slow = slow.next
       fast = fast.next.next 
       // prev = slow
       // prev.next = null    
   }
    //condition for the turtle
    let prev = null
    while(slow){
        let temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp       
    }
    // console.log(slow)
    // console.log(fast)
    //condition for the comparison
    let first = head, last = prev
    // console.log(last.val)
    // console.log(last.next.val)
    
    while(last){
        if(first.val !== last.val){
            return false
        } 
        first = first.next
        last = last.next          
    }
    return true
   
   
   
   
   
};