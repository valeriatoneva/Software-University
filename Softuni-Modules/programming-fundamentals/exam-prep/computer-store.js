function solve(input) {
  let sumWithoutTax = 0;
  let total = 0;
  let taxes = 0;
  total = sumWithoutTax + taxes;

  for (let i = 0; i < input.length; i++) {
    let currEl = input[i];

    if (currEl !== `special` && currEl !== `regular` && Number(currEl) > 0) {
      sumWithoutTax = sumWithoutTax + Number(currEl); //
    }

    taxes = sumWithoutTax * 0.2;
    total = sumWithoutTax + taxes;

    if (Number(currEl) < 0) {
      console.log(`Invalid price!`); // perfect placement
    }

    if (currEl === `special`) {
      total = total - total * 0.1;
    }
  }

  if (total == 0) {
    console.log(`Invalid order!`);
  } else {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${sumWithoutTax.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${total.toFixed(2)}$`);
  }
}
solve(["1023", "15", "-20", "-5.50", "450", "20", "17.66", "19.30", "regular"]);
