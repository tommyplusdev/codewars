// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); 
// igPay atinlay siay oolcay

// pigIt('Hello world !');     
// elloHay orldway !

export const pigIt = (a : string) : string =>  {
    // code away
    let stringArray : string [] = a.split(" ");
    const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
    let pigString : string = stringArray.map(word => {
      if (word && (alphabet.has(word[0].toLowerCase()))) { // check for empty string
      word = word.slice(1) + word[0] + "ay";
      return word;
      } else return word;
    }).join(" ");
    return pigString;
}