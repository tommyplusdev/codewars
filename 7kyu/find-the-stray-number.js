// Find the stray number

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// Using a temporary object
function stray(numbers) {
    let count = {};
    for (i = 0; i < numbers.length; i++) {
      count[numbers[i]] = (count[numbers[i]] || 0) + 1 
    }
    for (let number in count) {
      if (count[number] === 1) {
        return +number;
      }
    }
}

// Using its indexes
function stray(numbers) {
  for (number of numbers) {
    if (numbers.indexOf(number) === numbers.lastIndexOf(number)) { //the stray number has no mirror image, so the index of the end and beginning are the same.
      return number;
    }
  }
}