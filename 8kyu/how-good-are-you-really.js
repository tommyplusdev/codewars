// How good are you really?

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    // calculate the sum
    // get number of elements in the array
    // divide sum by num of elements to get average
    // do comparisons and return boolean
    let sum = classPoints.reduce((sum, currentPts) => sum + currentPts, 0) + yourPoints;
    let average = sum / (classPoints.length + 1);
    if (yourPoints > average) {
      return true;
    } else {
      return false;
    }
}  