function solve(input) {
  let parking = new Set();

  for (let el of input) {
    let [command, number] = el.split(", ");
    if (command == `IN`) {
      parking.add(number);
    } else {
      parking.delete(number);
    }
  }
  let parkingToArr = Array.from(parking);
  parkingToArr.sort();

  for (let car of parkingToArr) {
    if (parking.size == 0) {
      console.log(`Parking Lot is Empty`);
    } else {
      console.log(car);
    }
  }
}
solve([
  "IN, CA2844AA",

  "IN, CA1234TA",

  "OUT, CA2844AA",

  "IN, CA9999TT",

  "IN, CA2866HI",

  "OUT, CA1234TA",

  "IN, CA2844AA",

  "OUT, CA2866HI",

  "IN, CA9876HH",

  "IN, CA2822UU",
]);
