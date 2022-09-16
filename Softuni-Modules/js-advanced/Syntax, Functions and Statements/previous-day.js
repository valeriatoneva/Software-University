function solve(year, month, day) {
  let peviousDay = 0;

  if (day - 1 > 0) {
    peviousDay = day - 1;
  } else if (day - 1 == 0) {
    peviousDay = 30;
    month = month - 1;
  }

  console.log(`${year}-${month}-${peviousDay}`);
}
solve(2016, 10, 1);
