// Design Linked List and its CRUD using Functions

function Node(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @return {String}
 */
MyLinkedList.prototype.display = function () {
  let list = "";
  let curr = this.head;
  while (curr !== null) {
    list = list + "|" + curr.val + "| --> ";
    curr = curr.next;
  }
  list = list + "null";
  return list;
};
/**
 * @param {Number} index
 * @return {Number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;

  let curr = this.head;
  for (let i = 0; i < index; i++) {
    if (curr === null) return -1;
    curr = curr.next;
  }
  return curr ? curr.val : -1;
};

/**
 * @param {Number} val
 * @return {Void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);

  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/**
 * @param {Number} val
 * @return {Void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};
/**
 * @param {Number} index
 * @param {Number} val
 * @return {Void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;

  let newNode = new Node(val);
  if (index === 0) {
    this.addAtHead(val);
  } else if (index === this.size) {
    this.addAtTail(val);
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
};

/**
 * @param {Number} index
 * @return {Void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    if (curr && curr.next) {
      curr.next = curr.next.next;
    }
  }
  this.size--;
};

/**
 * @return {Number}
 */
MyLinkedList.prototype.middleElement = function () {
  let slow = (fast = this.head);

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
};

// ========================================================

/**
 * @return {Void}
 */
MyLinkedList.prototype.swapNodesPairsIterative = function () {
  // Iterative Approach

  let curr = this.head;
  // Dummy node to simplify edge cases
  const dummy = new Node(0);
  dummy.next = curr;
  let prev = dummy;

  while (prev.next && prev.next.next) {
    // Identify the two nodes to swap
    let first = prev.next;
    let second = first.next;

    // Swapping process
    first.next = second.next;
    second.next = first;
    prev.next = second;

    // Move prev pointer two nodes ahead
    prev = first;
  }

  // Return new head (dummy.next)
  this.head = dummy.next;
};

/**
 * @return {Void}
 */
function swapNodesPairsRecursive(head) {
  // Recursive Approach

  // Base case: 0 or 1 node left
  if (!head || !head.next) return head;

  // Identify nodes to swap
  let first = head;
  let second = head.next;

  // Recursively swap the rest
  first.next = swapNodesPairsRecursive(second.next);

  // Perform current swap
  second.next = first;

  // New head is the second node
  return second;
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

let obj = new MyLinkedList();
obj.addAtHead(3);
obj.addAtTail(6);
obj.addAtTail(9);
obj.addAtTail(12);
obj.addAtTail(15);
obj.addAtTail(18);
obj.addAtTail(21);

console.log("Before :", obj.display());
obj.swapNodesPairsIterative();
console.log("After :", obj.display());
