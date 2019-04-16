function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function sort2(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}
