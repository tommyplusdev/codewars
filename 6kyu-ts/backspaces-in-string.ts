// Backspaces in string

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

export function cleanString(s: string): string {
	// ... your code ...
  let stringArray : string [] = s.split('');
  for (let i : number = 0; i < s.length; i++) {
    if (stringArray[i] === "#") { // delete #
    stringArray.splice(i, 1)
      i--
      if (stringArray[i]) {
        stringArray.splice(i, 1); // delete character before if exists
        i--
      }
    }
  }
  return stringArray.join('');
}

// everytime a character is deleted, decrement the index to
// take into account the new array length.