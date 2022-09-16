function solve(arr) {
  let numbers = [];
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      numbers.push(arr[x][y]);
    }
  }
  console.log(Math.max(...numbers));
}
solve([
  [20, 50, 10],
  [8, 33, 145],
]);
