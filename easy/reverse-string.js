
function reverse(str) {
 let reversed = ""
 for (let letter of str){
  reversed = letter + reversed;
 }
 return reversed
}
