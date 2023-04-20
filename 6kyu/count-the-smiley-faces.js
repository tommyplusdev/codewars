// Count the smiley faces!

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

//return the total number of smiling faces in the array

// first try
// function countSmileys(arr) {
//   let count = 0;
//   const eyes = new Set([':', ';']);
//   const noses = new Set(['-', '~']);
//   const smileyMouths = new Set(['D', ')']);
  
//   arr.forEach(emoji => {
//     if (eyes.has(emoji[0]) && smileyMouths.has(emoji[emoji.length - 1])) {
//       if (emoji.length === 2) {
//         count++;
//       } else if ((emoji.length === 3) && (noses.has(emoji[emoji.length - 2]))) {
//           count++;
//         }
//       }
//   });
  
//   return count;
// }

// second try
function countSmileys(arr) {
    const eyes = new Set([':', ';']);
    const noses = new Set(['-', '~']);
    const smileyMouths = new Set(['D', ')']);
    
      if (!arr || arr.length === 0) {
      return 0;
      }
  
    return arr.reduce((count, emoji) => {
      if (emoji.length === 2 && eyes.has(emoji[0]) && smileyMouths.has(emoji[1])) {
        return count + 1;
      } else if (emoji.length === 3 && eyes.has(emoji[0]) && noses.has(emoji[1]) && smileyMouths.has(emoji[2])) {
        return count + 1;
      }
      return count;
    }, 0);
  }
  
  
  // array of strings that contain a smiley faces
  // obviously check if string starts with ':' or ';'
  // can only have one nose unfortunately
  // check if the string ends with 'D' or ')'