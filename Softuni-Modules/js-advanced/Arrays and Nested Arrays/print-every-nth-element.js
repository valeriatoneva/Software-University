function solve(arr, n) {
  let numbers = [];
  for (let i = 0; i < arr.length; i += n) {
    numbers.push(arr[i]);
    console.log(arr[i]);
  }
}
