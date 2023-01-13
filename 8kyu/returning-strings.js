// Returning Strings

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]


function greet(name){
    // template literal
    return `Hello, ${name} how are you doing today?`

    // concatenation
    return "Hello, " + name + " " + "how are you doing today?"
}

// This question is about passing an argument as an expression to be calculated or included in the string, in a template literal or as a result of concatenation.

// This question is easy, so adding explanations about the problem is better for memory retention to JS syntax.

// The second return for concatenation is never reached anyways, so no need to comment it out.