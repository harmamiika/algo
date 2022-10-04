var reverseList = function (head) {
  if (!head.next) return head;

  let current = this.head;
  let previous = undefined;

  while (current.next.next) {
    let temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }
};
