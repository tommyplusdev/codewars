// Consonant value

// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.

// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

// For C: do not mutate input.

export function solve(s: string) {
    // your code here
    const letterValues: { [key: string]: number } = {
    'a': 0,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 0,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 0,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 0,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 0,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
  };
    
    const consonantSubstringScores : { [key : string] : number } = {};
    let consonantSubstring : string = "";
    
    function calculateScore(string : string) : number {
      let score : number = 0;
      for (let i : number = 0; i < string.length; i++) {
        score += letterValues[string[i]]; 
      }
      return score;
    }
    
    // get substrings and set a value for their consonant substring.
    for (let i : number = 0; i < s.length; i++) {
      if (letterValues[s[i]] !== 0) {
        consonantSubstring += s[i]; // add character
      } else {
        consonantSubstringScores[consonantSubstring] = calculateScore(consonantSubstring);
        consonantSubstring = ""; // reset
      }
    }
    
    // if last letter happens to be a consonant...
    if (consonantSubstring !== "") {
    consonantSubstringScores[consonantSubstring] = calculateScore(consonantSubstring);
    }
    
    return Math.max(...Object.values(consonantSubstringScores)); // return max value
}