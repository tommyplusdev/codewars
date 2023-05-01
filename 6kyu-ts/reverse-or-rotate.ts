// Reverse or rotate?

// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

export function revRot(s: string, sz: number): string {
    if (sz <= 0 || s.length < sz) return "";
  
    function sumCubes(string: string): number {
      return string.split("").reduce((sum: number, digit: string) => {
        const cube = parseInt(digit) ** 3;
        return sum + cube;
      }, 0);
    }
  
    let stringArray: string[] = [];
  
    // slice into chunks
    for (let i = 0; i < s.length; i += sz) {
      const chunk = s.slice(i, i + sz); // offset the sz by the index to get the right string
      if (chunk.length === sz) { // ensure the chunks are the right length.
        stringArray.push(chunk);
      }
    }
  
    // transform array
    stringArray = stringArray.map((chunk: string) => {
      if (sumCubes(chunk) % 2 === 0) {
        // reverse chunk
        return chunk.split("").reverse().join("");
      } else {
        // rotate chunk to the left
        const firstChar = chunk[0];
        return chunk.slice(1) + firstChar;
      }
    });
  
    return stringArray.join("");
}  