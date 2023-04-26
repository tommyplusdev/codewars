// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.
// If you liked this kata, check out part 2!!


function expandedForm(num) {
    // your code here
    let stringNum = num.toString();
    let expandedArray = [];

    for (let i = 0; i < stringNum.length; i++) {
        if (stringNum[i] !== "0") {
          // fill in the rest of the number, from the index offset.
            const expandedNum = stringNum[i].padEnd(stringNum.length - i, "0");
            expandedArray.push(expandedNum);
        }
    }

    return expandedArray.join(" + ");
}