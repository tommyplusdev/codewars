// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:
// 	1	Find the unique number (this kata)
// 	2	Find the unique string
// 	3	Find The Unique


function findUniq(arr) {
    const counts = arr.reduce((accum, value) => {
      accum[value] = (accum[value] || 0) + 1; // set it to 0 if property is undefined, then add one
      return accum; //return the new object for next iteration
    }, {})
    for (const count in counts) {
      if (counts[count] === 1) return +count; // 
    }
}
  