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
 * @param {number} index
 * @return {number}
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
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);

  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
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
 * @param {number} index
 * @param {number} val
 * @return {void}
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
 * @param {number} index
 * @return {void}
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
 * @return {number}
 */
MyLinkedList.prototype.middleElement = function () {
  let slow = (fast = this.head);

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
};

// This approach is only work for remove middle elements
/**
 * @param {number} el
 * @return {void}
 */
MyLinkedList.prototype.removeElement = function (el) {
  let prev = this.head;
  let curr = prev.next;

  if (prev.val === el) this.deleteAtIndex(0);
  if (curr.val === el) this.deleteAtIndex(1);

  while (curr) {
    if (curr.val === el) {
      prev.next = curr.next;
    }
    prev = curr;
    curr = curr.next;
  }
};

// Sentinal Node approach :- add new dummy node in front of the linked list
/**
 * @param {number} el
 * @return {void}
 */
MyLinkedList.prototype.removeElementOptimized = function (el) {
  let sentinal = new Node();
  sentinal.next = this.head;

  let prev = sentinal;
  while (prev && prev.next) {
    if (prev.next.val === el) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }

  this.head = sentinal.next;
};

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
obj.addAtTail(6);
obj.addAtTail(6);
obj.addAtTail(9);
obj.addAtTail(12);
obj.addAtTail(6);
obj.addAtTail(6);

console.log("Before :", obj.display());
// obj.removeElement(6);
obj.removeElementOptimized(6);
console.log("After :", obj.display());
