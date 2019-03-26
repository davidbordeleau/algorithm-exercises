function maxChar(str) {
  const my_hash = {};
  let index = 0;
  let result = [];
  str.split("").forEach(letter => {
    my_hash[letter] ? my_hash[letter] ++ : my_hash[letter] = 1;
    if (my_hash[letter] > index){ (index = my_hash[letter]) && (result = letter) }
  })
  return result
}
