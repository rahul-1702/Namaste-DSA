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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {MyLinkedList}
 */
function mergeTwoList(list1, list2) {
  if (!list1 && !list2) return null;

  let ans = new Node();
  let ansHead = ans;
  let newVal;

  while (list1 || list2) {
    if (list1 && !list2) {
      newVal = list1.val;
      list1 = list1 ? list1.next : -Infinity;
    } else if (list2 && !list1) {
      newVal = list2.val;
      list2 = list2 ? list2.next : -Infinity;
    } else {
      if (list1.val < list2.val) {
        newVal = list1.val;
        list1 = list1 ? list1.next : -Infinity;
      } else {
        newVal = list2.val;
        list2 = list2 ? list2.next : -Infinity;
      }
    }
    nNod = new Node(newVal);
    ans.next = nNod;
    ans = ans.next;
  }

  return ansHead.next;
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

let l1 = new MyLinkedList();
l1.addAtHead(1);
l1.addAtTail(2);
l1.addAtTail(4);
l1.addAtTail(5);

let l2 = new MyLinkedList();
l2.addAtHead(2);
l2.addAtTail(3);
l2.addAtTail(5);
l2.addAtTail(6);

console.log("Before l1 :", l1.display());
console.log("Before l2 :", l2.display());
console.log("(l1 & l2) :", mergeTwoList(l1, l2));
