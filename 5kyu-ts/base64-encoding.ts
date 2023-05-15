// Base64 Encoding

// Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.

// Example (input -> output):
// 'this is a string!!' -> 'dGhpcyBpcyBhIHN0cmluZyEh'
// You can learn more about Base64 encoding and decoding here.

// Note: This kata uses the non-padding version ("=" is not added to the end).

export function toBase64(str: string): string {
    // Encode this string to Base64
    const encoder = new TextEncoder();
    const data: Uint8Array = encoder.encode(str); // Use 'str' instead of 'string'
    const binaryString: string = String.fromCharCode.apply(null, Array.from(data)); // Convert Uint8Array to array
    const base64String: string = btoa(binaryString);
    return base64String;
  }
  
  export function fromBase64(str: string): string {
    // Decode this string from Base64
    const decodedData: string = atob(str); // Use 'str' instead of 'string'
    const decoder = new TextDecoder();
    const decodedString: string = decoder.decode(new Uint8Array([...decodedData].map((c) => c.charCodeAt(0))));
    return decodedString;
  }
  