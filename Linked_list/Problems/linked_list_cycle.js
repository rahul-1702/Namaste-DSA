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

/**
 * @return {void}
 */
MyLinkedList.prototype.reverse = function () {
  let prev = null;
  let curr = this.head;
  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  this.head = prev;
  return this.head;
};

/**
 * @return {boolean}
 */
MyLinkedList.prototype.isAnyCycle = function () {
  let result = new Set();
  let curr = this.head;
  while (curr !== null) {
    if (result.has(curr)) {
      return true;
    }
    result.add(curr);
    curr = curr.next;
  }
  return false;
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

var obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtTail(2);
obj.addAtTail(3);
obj.addAtTail(4);
obj.addAtTail(5);
obj.addAtTail(6);

console.log(obj.display());
console.log("Is any cycle :", obj.isAnyCycle());
