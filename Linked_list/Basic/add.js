// Update one Node in Linked List

function LinkedList() {
  let val;
  let next;

  this.newNode = function (val) {
    this.val = val;
    this.next = null;
  };

  this.MyLinkedList = function (head) {
    let curr = head;
    while (curr.next !== null) {
      console.log(curr.val);
      curr = curr.next;
    }
  };

  this.addNodeAtStart = function (val, head) {};
}
