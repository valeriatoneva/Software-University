function solve(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let sumRowOne = arr[i].reduce((acc, el) => acc + el);
    let sumRowTwo = arr[i + 1].reduce((acc, el) => acc + el);
    let sumColOne = 0;
    let sumColTwo = 0;

    for (let col = 0; col < arr.length; col++) {
      sumColOne += arr[i][col];
      sumColTwo += arr[i + 1][col];
    }
    if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(
  solve([
    [4, 5, 6],

    [6, 5, 4],

    [5, 5, 5],
  ])
);
