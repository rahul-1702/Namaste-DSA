var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB;

    while(pA != pB) {
        pA = pA == null ? headB : pA.next;
        pB = pB == null ? headA : pB.next;
    }
    return pA;
};

// TEST CASES =====

// Helper to create a ListNode
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// ---------- Test Case 1: Intersection exists ----------
// Common part
let c1 = new ListNode(8);
let c2 = new ListNode(4);
let c3 = new ListNode(5);
c1.next = c2;
c2.next = c3;

// List A: 4 → 1 → 8 → 4 → 5
let a1 = new ListNode(4);
let a2 = new ListNode(1);
a1.next = a2;
a2.next = c1;

// List B: 5 → 6 → 1 → 8 → 4 → 5
let b1 = new ListNode(5);
let b2 = new ListNode(6);
let b3 = new ListNode(1);
b1.next = b2;
b2.next = b3;
b3.next = c1;

console.log(getIntersectionNode(a1, b1)?.val); // 8

// ---------- Test Case 2: No intersection ----------
let x1 = new ListNode(2);
let x2 = new ListNode(6);
let x3 = new ListNode(4);
x1.next = x2;
x2.next = x3;

let y1 = new ListNode(1);
let y2 = new ListNode(5);
y1.next = y2;

console.log(getIntersectionNode(x1, y1)); // null

// ---------- Test Case 3: Both lists are same ----------
let s1 = new ListNode(1);
let s2 = new ListNode(2);
let s3 = new ListNode(3);
s1.next = s2;
s2.next = s3;

console.log(getIntersectionNode(s1, s1)?.val); // 1

// ---------- Test Case 4: One list is empty ----------
console.log(getIntersectionNode(null, s1)); // null
console.log(getIntersectionNode(null, null)); // null
