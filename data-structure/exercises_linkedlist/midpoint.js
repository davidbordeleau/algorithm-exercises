// assuming that list is a linked list

function midpoint(list) {
  let slow = list.getAt(0);
  let fast = list.getAt(0);

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
