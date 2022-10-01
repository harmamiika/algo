// o(n)

// SHORTER - BETTER (M)
var removeNthFromEnd = function (head, n) {
  const dummy = { next: head };
  let left = dummy;
  let right = head;

  while (n > 0 && right) {
    right = right.next;
    n--;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;

  return dummy.next;
};

// OMA WORKING

var removeNthFromEnd = function (head, n) {
  if (!head) return null;
  if (head.next === null) return n === 1 ? null : head;
  let curr = head;
  let nthFromCurr = null;
  let counter = 0;
  let dummy = { next: head };
  let nthFromCurrPrev = dummy;
  while (curr) {
    // keep track of nth behind curr
    counter++;
    if (n === counter) {
      nthFromCurrPrev.next = head;
      nthFromCurr = head;
    } else if (n < counter) {
      nthFromCurrPrev = nthFromCurr;
      nthFromCurr = nthFromCurr?.next;
    }
    curr = curr.next;

    // edge case - head otetaan pois
  }
  if (counter === n) head = nthFromCurr.next;
  else nthFromCurrPrev.next = nthFromCurr.next;
  return head;
};
