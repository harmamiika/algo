// O(N * logN)

var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) return null;

  while (lists.length > 1) {
    const mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i];
      let l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergeList(l1, l2));
    }
    lists = mergedLists;
  }

  return lists[0];

  function mergeList(l1, l2) {
    const dummy = { next: null };
    let tail = dummy;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }
    tail.next = l1 || l2 || null;
    return dummy.next;
  }
};

// OMA VERY SLOOW

var mergeKLists = function (lists) {
  // currnodes on array
  let currNodes = [...lists];
  const dummy = { next: null };
  let curr = dummy;

  while (true) {
    let min = Infinity;
    let minIndex = undefined;
    // find min
    for (let i = 0; i < currNodes.length; i++) {
      const node = currNodes[i];
      if (!node) continue;
      else if (node.val < min) {
        min = node.val;
        minIndex = i;
      }
    }
    if (min === Infinity) break;
    curr.next = currNodes[minIndex];
    currNodes[minIndex] = currNodes[minIndex].next;
    curr = curr.next;
  }

  return dummy.next;
};
