class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listsOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    altitude = Number(altitude);

    if (this.goals[peak] == undefined) {
      this.goals[peak] = altitude;
      return `You have successfully added a new goal - ${peak}`;
    } else {
      return `${peak} has already been added to your goals`;
    }
  }
  hike(peak, time, difficultyLevel) {
    time = Number(time);

    if (this.goals[peak] === undefined) {
      throw new Error(`${peak} is not in your current goals`);
    }

    if (this.goals[peak] !== undefined && this.resources === 0) {
      throw new Error("You don't have enough resources to start the hike");
    }
    let usedResources = time * 10;
    let difference = this.resources - usedResources;

    if (difference < 0) {
      return "You don't have enough resources to complete the hike";
    } else {
      this.resources -= Number(usedResources);
      this.listsOfHikes.push({ peak, time, difficultyLevel });
    }

    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }
  rest(time) {
    time = Number(time);
    this.resources += time * 10;
    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      return `You have rested for ${time} hours and gained ${
        time * 10
      }% resources`;
    }
  }
  showRecord(criteria) {
    if (this.listsOfHikes.length === 0) {
      return `${this.username} has not done any hiking yet`;
    }
    let sortedHikes = allHikes.sort((a, b) => a.time - b.time);
    let bestHike = sortedHikes[0];

    switch (criteria) {
      case "hard":
        let allHikes = this.listOfHikes.filter(
          (hike) => hike.difficultyLevel === criteria
        );
        break;
      case "easy":
        allHikes = this.listOfHikes.filter(
          (hike) => hike.difficultyLevel === criteria
        );
        break;
      case "all":
        let res = [];
        let firstLine = "All hiking records:";
        sortedHikes.forEach((el) => {
          res.push(`${el.username} hiked ${el.peak} for ${el.time} hours`);
        });
        res.push(firstLine);
        return result.join("\n");
        break;
    }

    return `${this.username}'s best ${criteria} hike is ${peak} peak, for ${time} hours`;

    if (hike.difficultyLevel !== undefined) {
      return `${this.username} has not done any ${criteria} hiking yet`;
    }
  }
}
const user = new SmartHike("Vili");
console.log(user.showRecord("all"));
