// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
function findFactorialRecursive(number) {
  if (number > 1) {
    return number = number * findFactorialRecursive(number - 1);
  }
  return number;
}


function findFactorialIterative(number) {
  if (number <= 0) return number;
  let result = 1;
  for (i = 1; number >= i; i++) {
    result = result * i;
  }
  return result;
}

