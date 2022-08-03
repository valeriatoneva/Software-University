function solve(input) {
  let regex =
    /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
  let sum = 0;
  let name = regex.exec(input); // tests for a match in a string, If it finds a match, it returns a result array, otherwise it returns null, this is how we get gorups
  let foodInfo = [];
  let itemsCount = 0;
  while (name) {
    itemName = name.groups.name;
    expDate = name.groups.date;
    cals = name.groups.calories;
    foodInfo.push({ itemName, expDate, cals });

    sum += Number(cals);
    name = regex.exec(input); // updates
  }
  let days = Math.floor(sum / 2000);
  console.log(`You have food to last you for: ${days} days!`);

  foodInfo.forEach((obj) => {
    console.log(
      `Item: ${obj.itemName}, Best before: ${obj.expDate}, Nutrition: ${obj.cals}`
    );
  });
}
solve([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
