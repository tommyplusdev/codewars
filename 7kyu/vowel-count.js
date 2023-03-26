// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    // iterate over the characters in the string to check if matches a vowel, 
    // iterate over our vowels list to do so
    str.split('').forEach(character => {
      for (i = 0; i < vowels.length; i++) {
        if (character === vowels[i]) {
          count++;
        }
      }
    });
    return count;
  }