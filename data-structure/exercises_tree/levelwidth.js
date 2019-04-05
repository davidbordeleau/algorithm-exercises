// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.

function levelWidth(root) {
  const result = [0];
  let arr = [root, 'stop'];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node !== 'stop'){
      arr.push(...node.children);
      result[result.length - 1]++;
    } else {
      result.push(0);
      arr.push('stop');
    }
  }
  return result;
}
