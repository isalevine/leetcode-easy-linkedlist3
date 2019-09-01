// source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/



// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?





// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
var reverseList = function(head) {
    let prevNode = null;
    let currNode = head;
    while (currNode != null) {
        let nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    };
    return prevNode
};