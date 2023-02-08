// Testing 1-2-3

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


// Without array methods
var number=function(array){
    //your awesome code here
    let n = 0;
    for (i = 0; i < array.length; i++) {
      n++;
      array[i] = `${n}: ${array[i]}`
    }
    return array;
}

// More concise with array methods:
number = array => array.map((element, index) => `${index+1}: ${element}`)