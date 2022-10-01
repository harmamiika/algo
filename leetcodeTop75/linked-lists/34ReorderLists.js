var reorderList = function (head) {
  // better way to find midpoint
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let second = slow.next;
  slow.next = null;
  let prev = null;
  // reverse
  while (second) {
    const temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }
  // merge
  second = prev;
  first = head;
  while (second !== null) {
    const [temp1, temp2] = [first.next, second.next];
    first.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }
};

// OMA

var reorderList = function (head) {
  let firstPointer = head;
  let lastPointer = null;

  function traverse(head, length = Infinity) {
    let curr = head;
    let counter = 1;
    while (curr.next !== null && counter <= length) {
      curr = curr?.next;
      counter++;
    }
    return { node: curr, length: counter };
  }
  // TODO MAYBE: CUT NEXT FROM FIRST HALFS TAIL
  // get halfway length
  const halfLength = traverse(head).length / 2;
  const prevToHalf = traverse(head, halfLength - 1).node;
  lastPointer = prevToHalf.next;
  prevToHalf.next = null;

  function reverseList(curr) {
    let prev = null;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    // unohdit returnaa prev
    return prev;
  }
  lastPointer = reverseList(lastPointer);
  return mergeLists(firstPointer, lastPointer);
};

function mergeLists(head1, head2) {
  let [firstPointer, lastPointer] = [head1, head2];
  let dummy = { next: null };
  let curr = dummy;
  while (firstPointer && lastPointer) {
    // liikuta keaa
    curr.next = firstPointer;
    curr = firstPointer;
    firstPointer = firstPointer.next;

    // toista
    curr.next = lastPointer;
    curr = lastPointer;
    lastPointer = lastPointer.next;
  }
  curr.next = firstPointer || lastPointer || null;
  return dummy.next;
}
