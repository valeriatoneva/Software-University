function solve(arr, sortingCriterion) {
  let result = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  for (let el of arr) {
    let [destinationName, price, status] = el.split("|");
    price = Number(price);
    result.push(new Ticket(destinationName, price, status));
  }

  return result.sort((a,b) =>{
    if(typeof a[sorting] === 'number'){
      return a[sorting] - b[sorting]
    }else{
      return a[sorting].localeCompare(b[sorting])
    }
  });

}
solve(
  [
    "Philadelphia|94.20|available",

    "New York City|95.99|available",

    "New York City|95.99|sold",

    "Boston|126.20|departed",
  ],

  "destination"
);
