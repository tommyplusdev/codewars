// Split Strings

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// JavaScript
// function solution(str){
//   if (str.length % 2 !== 0) {
//     str += "_"; // append _ if it's not even
//   }
//   let strArray = [];
//   for (i = 0; i < str.length; i += 2) {
//     strArray.push(str.slice(i, i + 2))
//   }
//   return strArray;
// }

// TypeScript
export function solution(str : string) : string [] {
    if (str.length % 2 !== 0) {
      str += "_"; // append _ if it's not even
    }
    let strArray: string [] = [];
    for (let i = 0; i < str.length; i += 2) {
      strArray.push(str.slice(i, i + 2))
    }
    return strArray;
  }