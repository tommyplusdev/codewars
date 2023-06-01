// Balanced Number (Special Numbers Series #1 )

// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

// The task
// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

// Examples

// 7 ==> return "Balanced"
// Explanation:
// middle digit(s): 7
// sum of all digits to the left of the middle digit(s) -> 0
// sum of all digits to the right of the middle digit(s) -> 0
// 0 and 0 are equal, so it's balanced.

// 295591 ==> return "Not Balanced"
// Explanation:
// middle digit(s): 55
// sum of all digits to the left of the middle digit(s) -> 11
// sum of all digits to the right of the middle digit(s) -> 10
// 11 and 10 are not equal, so it's not balanced.

// 959 ==> return "Balanced"
// Explanation:
// middle digit(s): 5
// sum of all digits to the left of the middle digit(s) -> 9
// sum of all digits to the right of the middle digit(s) -> 9
// 9 and 9 are equal, so it's balanced.

// 27102983 ==> return "Not Balanced"
// Explanation:
// middle digit(s): 02
// sum of all digits to the left of the middle digit(s) -> 10
// sum of all digits to the right of the middle digit(s) -> 20
// 10 and 20 are not equal, so it's not balanced.

export function balancedNum(number: number): string {
    if (number.toString().length === 1 || number.toString().length === 2) return "Balanced";
  
    const numberArray: string[] = number.toString().split('');
    const middleIndex: number = Math.floor(numberArray.length / 2);
    let numberArray1: string[] = [];
    let numberArray2: string[] = [];
  
    if (numberArray.length % 2 === 0) {
      numberArray1 = numberArray.slice(0, middleIndex - 1); // exclude mid-left
      numberArray2 = numberArray.slice(middleIndex + 1); // exclude mid-right
    } else {
      numberArray1 = numberArray.slice(0, middleIndex); // exclude mid
      numberArray2 = numberArray.slice(middleIndex + 1); // exclude mid (same)
    }
  
    const numberArray1Sum: number = numberArray1.reduce((acc, current) => acc + Number(current), 0);
    const numberArray2Sum: number = numberArray2.reduce((acc, current) => acc + Number(current), 0);
  
    if (numberArray1Sum === numberArray2Sum) {
      return "Balanced";
    } else {
      return "Not Balanced";
    }
  }
  
// split the numbers individually into digits
// if it's odd, exclude the middle index
// if it's even, exclude the two middle indexes
// finally, compare the sum of each side if they are equal