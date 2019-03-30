// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides

function pyramid(n) {
  let maxIndex = (n * 2) - 1
  let index = 0
  let steps = n;
  while (index <= maxIndex) {
    if (steps === 0) {
      console.log('#'.repeat(index));
      index += 2;
      steps --
    } else {
      let blank = (2 * steps) / 2;
      console.log(' '.repeat(blank - 1) + '#'.repeat(index + 1) + ' '.repeat(blank - 1));
      index += 2;
      steps --
    }
  }
}

pyramid(3)


