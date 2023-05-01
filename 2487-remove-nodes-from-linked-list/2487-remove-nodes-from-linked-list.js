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
var removeNodes = function(head) {
    let curr = head, res = new ListNode(), stack = []
    while(curr) { // loop as long curr !== null
        while(stack.length && stack[stack.length - 1] < curr.val){
            // loop in our stack and remove any value that is less than our curr val 
            stack.pop()
        }
        stack.push(curr.val) // add curr val to stack
        curr = curr.next // iterate to the next node
    }
    const copy = res
    for(const item of stack){ // loop through the stack
        const newNode = new ListNode(item)
        res.next = newNode //new node
        // update next pointer to point to this created node
        res = newNode
        // update newNode to be our current node
    }
    return copy.next
    
};