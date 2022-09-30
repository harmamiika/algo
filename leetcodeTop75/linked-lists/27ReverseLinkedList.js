var reverseList = function (head) {
  let [prev, curr, next] = [null, head, null];

  while (curr) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
};

var reverseList = function (head) {
  let [current, prev] = [head, null];
  while (current) {
    const temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};

var reverseList = function (head) {
  if (!head) return null;
  newHead = head;
  if (head.next) {
    newHead = reverseList(head.next);
    head.next.next = head;
  }
  head.next = null;

  return newHead;
};
