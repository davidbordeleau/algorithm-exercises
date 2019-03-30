// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!

function steps(n) {
  let index = 1;
  while (index <= n) {
    console.log(('#'.repeat(index)) + (' '.repeat((n - index))));
    index ++;
  }
}

steps(4)
