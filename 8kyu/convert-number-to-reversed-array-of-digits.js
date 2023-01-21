// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    return String(n).split('').map(num => Number(num)).reverse();
}

// split to array if the number is a string
// map the elements back to number type
// reverse the array and place
// return the final result