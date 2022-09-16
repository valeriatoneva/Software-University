function solve(arr, start, end) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let flavour = arr[i];
    res.unshift(start);
  }
  console.log(res);
}
solve(
  [
    "Pumpkin Pie",

    "Key Lime Pie",

    "Cherry Pie",

    "Lemon Meringue Pie",

    "Sugar Cream Pie",
  ],

  "Key Lime Pie",

  "Lemon Meringue Pie"
);
