function anagrams(stringA, stringB) {
  const first = stringA.toLowerCase().split("").sort().join("");
  const second = stringB.toLowerCase().split("").sort().join("");
  return first === second;
}

anagrams('rail safety', 'fairy tales');
