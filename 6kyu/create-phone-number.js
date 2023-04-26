// Create Phone Number

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
    if (numbers.length === 10) {
    numbers = numbers.join(''); // convert to a working string
    const areaCode = numbers.slice(0, 3);
    const exchangeCode = numbers.slice(3, 6);
    const subscriberNumber = numbers.slice(6);
    return `(${areaCode}) ${exchangeCode}-${subscriberNumber}`
    } else return "Not a valid phone number."
}

// slice: start = inclusive, end = exclusive