// Categorize New Member

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
    // data is assumed to be an array, containing arrays of member elements.
    let categorizedData = [];
    data.forEach (member => { // elements of data array
        if (member[0] >= 55 && member[1] > 7) {
          categorizedData.push("Senior");
        } else {
          categorizedData.push("Open")
        }
    })
    return categorizedData;
}

function checkEqual(input, output) {
    let checkedArray = openOrSenior(input);
    for (let i = 0; i < input.length; i++) {
        if (checkedArray[i] === output[i]) {
            return true
        }
    }
    return false;
}

checkEqual(input, output);
//true
  
  // what's a senior?
  // age >= 55
  // handicap > 7
  
  // everything else is open
  
  // all arrays contain 2 elements, and indices 0 and 1.
  // 0 : age
  // 1 : handicap
  
  // check each array index and if they satisfy the criteria