// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size


function chunk(array, size) {
  const result = []
  let subArray = []
  array.forEach(num => {
    if (subArray.length < size){
      subArray.push(num)
    } else {
      result.push(subArray)
      subArray = []
      subArray.push(num)
    }
  })
  result.push(subArray)
  return result
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
