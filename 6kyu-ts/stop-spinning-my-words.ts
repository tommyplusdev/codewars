// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

interface Word {
    value: string;
    isReversed: boolean;
  }
  
export function spinWords(words: string): string {
    // TODO Have fun :)
    const wordsArray: Word[] = words.split(' ').map((word) => {
      if (word.length >= 5) {
        return { value: reverse(word), isReversed: true };
      } else {
        return { value: word, isReversed: false };
      }
    });
    const modifiedArray = wordsArray.map((word) => word.value);
    return modifiedArray.join(' ');
}

const reverse = (str: string): string => {
    return str.split("").reverse().join("");
};