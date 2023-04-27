// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i]  === string[i].toUpperCase() && i !== 0) {
        newString += " ";
      }
    newString += string[i];
    }
  return newString;
}

solution("camelCase");

// build a new string with checks, C style.