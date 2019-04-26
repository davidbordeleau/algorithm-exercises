// class Node {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

function mergeTwoLists(l1, l2) {
  if(l1 == null) return l2;
  if(l2 == null) return l1;

  if(l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
  }
}
