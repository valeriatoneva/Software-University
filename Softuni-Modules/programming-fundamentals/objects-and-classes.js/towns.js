function solve(input) {
    for (let i = 0; i < input.length; i++) {
      let splitArr = input[i].split(" | ");
      let town = splitArr[0];
      let latitude = Number(splitArr[1]).toFixed(2);
      let longitude = Number(splitArr[2]).toFixed(2);
  
      let obj = {
        town: town,
        latitude: latitude,
        longitude: longitude,
      };
      console.log(obj);
    }
  }