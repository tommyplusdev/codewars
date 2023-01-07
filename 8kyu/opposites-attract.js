//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    // moment of truth
    if (flower1 % 2 === 0 && flower2 % 2 === 1) {
      return true
    } else if (flower1 % 2 === 1 && flower2 % 2 === 0) {
      return true
    } else {
      return false
    }
  }