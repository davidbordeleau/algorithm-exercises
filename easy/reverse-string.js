
function reverse(str) {
 let reversed = ""
 for (let letter of str){
  reversed = letter + reversed;
 }
 return reversed
}

function reverseRecursive (str) {
  if (str === "") {
    return "";
  } else {
    return reverseRecursive(str.substr(1)) + str.charAt(0);
  }
}
