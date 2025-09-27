// Design Linked List and its CRUD using Class

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index < 0 || index >= this.size) return -1;

    let curr = this.head;
    for (let i = 0; i < index; i++) {
      if (curr === null) return -1;
      curr = curr.next;
    }
    return curr ? curr.val : -1;
  }
  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    let newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
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
  }
  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
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
  }
  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
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
  }
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

var obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtTail(2);
obj.addAtTail(3);
obj.addAtTail(4);
obj.addAtIndex(2, 5);
// console.log("obj.get(1) => ", obj.get(1));
obj.deleteAtIndex(5);
console.log("obj.get(2) => ", obj.get(2));
console.log("obj.get(2) => ", obj.get(0));
