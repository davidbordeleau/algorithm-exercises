function matrix(n) {
  let final_number = n
  const matrix_arrays = [];
  for (m = 0; m < n; m ++){
    matrix_arrays.push([]);
  }
  let current_array = 0;

  let index = "1";
  while (Number(index) <= n){
    matrix_arrays[current_array].push(Number(index));
    index = Number(index)+1;
    index = index.toString();
  }
  final_number = index
  index = '1';
  current_array ++;
  while (current_array <= (n - 1)){
    matrix_arrays[current_array].push(Number(final_number));
    final_number ++;
    final_number = final_number.toString();
    current_array ++
  }

  index = 1;
  current_array --;
  while (index <= (n - 1)){
    matrix_arrays[current_array].unshift(Number(final_number));
    final_number = Number(final_number) + 1;
    final_number.toString();
    index ++;
  }
  current_array --;
  while (current_array >= 1){
    matrix_arrays[current_array].unshift(final_number);
    current_array --;
    final_number ++;
  }
  current_array ++

  index = 3;
  while (matrix_arrays[current_array].length < n){
    while (matrix_arrays[current_array].length < n){
    let num = matrix_arrays[current_array];
    let my_index = matrix_arrays[current_array].indexOf(Math.max(...num));
    let min_index = matrix_arrays[current_array].indexOf(Math.min(...num));
      if (index % 3 === 0){
        matrix_arrays[current_array].splice(my_index+1, 0, final_number)
      } else {
        matrix_arrays[current_array].splice(my_index, 0, final_number)
      }
      final_number ++;
      if (matrix_arrays[current_array].length === n ){
        index++;}
      if ((matrix_arrays[current_array].length === n) && (index % 3 !== 0) && (final_number != (n*n)+1)){
        matrix_arrays[current_array+1].splice(matrix_arrays[current_array+1].indexOf(Math.min(...num)), 0, final_number)
        final_number ++;
        index ++;
      }
    }
    current_array ++
  }
  console.log(matrix_arrays);
}

matrix(8)

