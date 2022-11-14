function solve(data) {
  let addressBook = {};

  for (let el of data) {
    let [name, address] = el.split(":");
    addressBook[name] = address;
  }

  let entries = Object.entries(addressBook);
  let sortedEntries = entries.sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });

  for (let el of sortedEntries) {
    let names = el[0];
    let addresses = el[1];
    console.log(`${names} -> ${addresses}`);
  }
}
solve([
  "Tim:Doe Crossing",

  "Bill:Nelson Place",

  "Peter:Carlyle Ave",

  "Bill:Ornery Rd",
]);
