var hasCycle = function (head) {
  // FLOYDS TORTOISE AND HARE
  let [slow, fast] = [head, head];
  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow.val === fast?.val && slow.next === fast?.next) return true;
  }
  return false;
};
