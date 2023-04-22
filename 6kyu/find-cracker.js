// Find Cracker.

// Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
// ["name2", 110, ["B", "A", "A", "A"]],
// ["name3", 200, ["B", "A", "A", "C"]],
// ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
// ];
// The scores for each grade is:

// A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// Everything else: 0 points
// If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

// Returns the name of the hacked name as an array when scoring with this rule.

// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
// ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
// ["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked
// ,
// ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
// ];

// return ["name1", "name3"];

function calculateRawScore(grades) { // third element in the array.
    const gradeScores = {
      "A": 30,
      "B": 20,
      "C": 10,
      "D": 5
    };
  
    // Calculate the sum of the grade scores for each course
    return grades.reduce((total, grade) => {
      const score = gradeScores[grade] || 0;
      return total + score;
    }, 0);
  }
  
  function calculateBonusScore(grades) {
    // Count the number of A's and B's in the grades array
    const numABs = grades.filter(grade => grade === 'A' || grade === 'B').length;
  
    // If there are 5 or more courses and all courses are B or above, add 20 bonus points
    if (grades.every(grade => grade === 'A' || grade === 'B') && numABs >= 5 ) {
      return 20;
    } else {
      return 0;
    }
  }
  
  function calculateTotalScore(grades) {
    const rawScore = calculateRawScore(grades);
    const bonusScore = calculateBonusScore(grades);
  
    // Cap the total score at 200
    const totalScore = Math.min(rawScore + bonusScore, 200);
  
    return totalScore;
  }
  
  function checkHackedStudent(student) {
    const [name, score, grades] = student;
    const realScore = calculateTotalScore(grades);
  
    return score !== realScore;
  }
  
  function findHack(students) {
    return students.filter(checkHackedStudent).map(student => student[0]);
  }
  
  /* OOP ver. */
  
  // class GradeScore {
  //   constructor(grades) {
  //     this.grades = grades;
  //     this.gradeScores = {
  //       "A": 30,
  //       "B": 20,
  //       "C": 10,
  //       "D": 5
  //     };
  //   }
  
  //   calculateRawScore() {
  //     return this.grades.reduce((total, grade) => {
  //       const score = this.gradeScores[grade] || 0;
  //       return total + score;
  //     }, 0);
  //   }
  
  //   calculateBonusScore() {
  //     // Count the number of A's and B's in the grades array
  //     const numABs = this.grades.filter(grade => grade === 'A' || grade === 'B').length;
  
  //     // If there are 5 or more courses and all courses are B or above, add 20 bonus points
  //     if (this.grades.every(grade => grade === 'A' || grade === 'B') && numABs >= 5 ) {
  //       return 20;
  //     } else {
  //       return 0;
  //     }
  //   }
  
  //   calculateTotalScore() {
  //     const rawScore = this.calculateRawScore();
  //     const bonusScore = this.calculateBonusScore();
  
  //     // Cap the total score at 200
  //     const totalScore = Math.min(rawScore + bonusScore, 200);
  
  //     return totalScore;
  //   }
  
  //   findHack() {
  //     const [name, score, grades] = this.grades;
  //     const realScore = this.calculateTotalScore();
  
  //     return score !== realScore;
  //   }
  // }
  
  
  // const hackedScores = new GradeScore(array).findHack();
  // return hackedScores;
  
  