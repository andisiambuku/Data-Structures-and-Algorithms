/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let newList = new ListNode()
    let head = newList
    
    while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            let newNode = new ListNode(l1.val)
            console.log(newNode)
            newList.next = newNode
            console.log(newList)
            l1 = l1.next
        }else{
            newList.next = new ListNode(l2.val)
            l2 = l2.next 
        console.log(newList)
        } 
        newList = newList.next
        }
    // console.log(head)
    
        if(l1 !== null)
            newList.next = l1 
        if(l2 !== null)
            newList.next = l2 
    // console.log(head)
    
    return head.next
};