function capitalize(str) {
  const capitalize_word = []
  str.split(" ").forEach(word => {
    capitalize_word.push(word[0].toUpperCase() + word.slice(1));
  })
  return capitalize_word
}
