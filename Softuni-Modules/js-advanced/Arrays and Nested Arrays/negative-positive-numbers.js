function solve(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let currEl = Number(arr[i]);
    if (currEl < 0) {
      res.unshift(currEl);
    } else {
      res.push(currEl);
    }
  }
  console.log(res.join(`\n`));
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
