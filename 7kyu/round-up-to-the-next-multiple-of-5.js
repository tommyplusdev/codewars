// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

function roundToNext5(n) {
    if (n === 0) {
      return 0;
    } else if (n > 0) { // handle positive numbers
      if (n % 5 === 0) {
        return n;
      } else {
        return n + (5 - (n % 5));
      }
    } else { // handle negative numbers
      if (n % 5 === 0) {
        return n;
      } else {
        return n - (n % 5);
      }
    }
  }
  
  // % 5 modulus should equal 0
  // if it isn't, add the remainder's difference (5-remainder) to the number, then return the number.
  // that way, no need to loop through numbers.