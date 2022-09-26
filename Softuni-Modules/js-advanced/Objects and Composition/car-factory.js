function solve(obj) {
  let res = {};
  res.model = obj.model;

  if (obj.power <= 90) {
    res[`engine`] = { power: 90, volume: 1800 };
  } else if (obj.power <= 120) {
    res.engine = { power: 120, volume: 2400 };
  } else {
    res.engine = { power: 200, volume: 3500 };
  }

  if (obj.carriage == "hatchback") {
    res.carriage = { type: "hatchback", color: obj.color };
  } else {
    res.carriage = { type: "coupe", color: obj.color };
  }

  let wheels = [];
  for (let i = 0; i < 4; i++) {
    if (obj.wheelsize % 2 !== 0) {
      wheels.push(obj.wheelsize);
    } else {
      obj.wheelsize--;
      wheels.push(obj.wheelsize);
    }
  }
  res.wheels = wheels;
  return res;
  // return obj;
}
solve({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
