// Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let stringArray = str.split(" ");
    // string to array
    // work on the string elements and reverse each character in the string
    let reversedStringCharacterArray = stringArray.map(string => {
      return string.split("").reverse().join("");
    }).join(" ");
    return reversedStringCharacterArray;
}