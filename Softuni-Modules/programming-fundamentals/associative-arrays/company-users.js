function solve(input) {
  let obj = {};

  for (let el of input) {
    let split = el.split(" -> ");
    let companyName = split[0];
    let employeeId = split[1];
    if (!obj.hasOwnProperty(companyName)) {
      obj[companyName] = new Set();
    }
    obj[companyName].add(employeeId);
  }
  let sorted = Object.entries(obj);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (let el of sorted) {
    console.log(el[0]);
    for (let num of el[1]) {
      console.log(`-- ${num}`);
    }
  }
}
solve([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
