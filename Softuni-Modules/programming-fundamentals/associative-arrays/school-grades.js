function solve(data) {
  let schoolGrades = new Map();

  for (let el of data) {
    let grades = el.split(" ");
    let student = grades.shift();
    let setOfGrade = 
    let gradeCount = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += Number(grades[i]);
      gradeCount++;
    }
    let avg = (sum / gradeCount).toFixed(2);

    if (!schoolGrades.has(student)) {
      schoolGrades.set(student, avg);
    } else {
      let oldAvg = schoolGrades.get(student);
      let newAvg = (Number(oldAvg) + Number(avg)) / 2;
      schoolGrades.set(student, newAvg);
    }
  }
  let sortEntries = Array.from(schoolGrades.entries()).sort(
    ([keyA, valA], [keyB, valB]) => {
      return keyA.localeCompare(keyB);
    }
  );

  for (let key of sortEntries) {
    console.log(`${key[0]}: ${key[1]}`);
  }
}
solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
