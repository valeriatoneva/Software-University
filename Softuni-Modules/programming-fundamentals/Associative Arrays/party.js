function solve(input) {
  // vip - with digit in the front, and regular
  let vip = new Set();
  let regular = new Set();

  while (input[0] !== `PARTY`) {
    let guest = input.shift();
    if (Number.isNaN(Number(guest[0]))) {
      regular.add(guest);
    } else {
      vip.add(guest);
    }
  }

  for (let guest of input) {
    vip.delete(guest);
    regular.delete(guest);
  }

  let numberOfGuests = vip.size + regular.size;
  console.log(numberOfGuests);

  for (let el of vip) {
    console.log(el);
  }

  for (let el of regular) {
    console.log(el);
  }
}
solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
