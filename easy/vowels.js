function vowels(str) {
  var regex = /[aeiou]/g;
  return str.match(regex).length;
}

console.log(vowels('Hi There!'));
