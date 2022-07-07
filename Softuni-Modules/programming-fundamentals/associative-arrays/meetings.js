function solve() {
  function solve(data) {
    let successfulMeetings = {};

    for (let el of data) {
      let [weekday, name] = el.split(" ");

      if (successfulMeetings.hasOwnProperty(weekday)) {
        console.log(`Conflict on ${weekday}`);
      } else {
        successfulMeetings[weekday] = name;
        console.log(`Scheduled for ${weekday}`);
      }
    }

    for (let key in successfulMeetings) {
      console.log(`${key} -> ${successfulMeetings[key]}`);
    }
  }
}
solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
