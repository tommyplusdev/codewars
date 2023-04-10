// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    let charFreq = {};
    let result = "";
    word = word.toLowerCase();
    
    // Count the frequency of each character
    for (let i = 0; i < word.length; i++) {
      if (charFreq[word[i]]) {
        charFreq[word[i]]++;
      } else {
        charFreq[word[i]] = 1;
      }
    }
    
    // Determine whether each character is a duplicate
    for (let i = 0; i < word.length; i++) {
      if (charFreq[word[i]] === 1) {
        result += "(";
      } else {
        result += ")";
      }
    }
    
    return result;
  }
  
  
  // store the count of the characters in an object
  // build the string, just like in C depending on the count amount check
  // return the string