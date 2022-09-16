function solve(arr) {
  let oddNums = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      oddNums.push(arr[i]);
    }
  }
  let res = oddNums
    .map(Number)
    .map((n) => n * 2)
    .reverse();

  console.log(res.join(" "));
}
solve([10, 15, 20, 25]);
console.log(`-------`);
solve([3, 0, 10, 4, 7, 3]);
