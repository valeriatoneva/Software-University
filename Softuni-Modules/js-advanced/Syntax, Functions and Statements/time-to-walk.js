function solve(steps, footprint, speed) {
  let distance = steps * footprint;
  let speedInMeters = speed / 3.6;
  let time = distance / speedInMeters;
  let res = Math.floor(distance / 500);
  let timeInMin = Math.floor(time / 60);
  let timeInSec = Math.floor(time - timeInMin * 60);
  let timeInH = Math.floor(time / 3600);
  timeInMin += res;
  timeInH += Math.floor(timeInMin / 60);
  timeInMin = timeInMin % 60;
  console.log(`0${timeInH}:${timeInMin}:${timeInSec}`);
}


