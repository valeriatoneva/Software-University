function solve(arr) {
  let res = arr.sort((a, b) => a - b).slice(0, 2);
  console.log(res.join(" "));
}
solve([30, 15, 50, 5]);
