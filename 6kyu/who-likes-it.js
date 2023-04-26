// Who likes it?

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
    // TODO
    names = names || []; //pre-format
    const people = function() {
      if (!names || names.length === 0) return "no one"
      else if (names.length === 1) return names[0];
      else if (names.length === 2) return `${names[0]} and ${names[1]}`;
      else if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]}`
      else return `${names[0]}, ${names[1]} and ${names.length - 2} others`
    }
    const likesFragment = function() {
      if (!names || names.length === 0) return "likes this";
      else if (names.length === 1) return "likes this";
      else if (names.length >= 2) return "like this"
    }
    return `${people()} ${likesFragment()}`;
}

// more abstracted in regards to the "likes" wording.