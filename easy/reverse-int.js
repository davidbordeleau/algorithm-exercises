function reverseInt(n) {
  if (n >= 0) {
   return Number(n.toString().split("").reverse().join(""));
  }
  num = n.toString().split("").reverse();
  num.unshift("-");
  num.pop();
  return Number(num.join(""));
}
