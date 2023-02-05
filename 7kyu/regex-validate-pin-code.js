// Regex validate PIN code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


// Using Sets & Guard Clause
function validatePIN (pin) {
  //return true or false
  const digits = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  let validPinStatus = true;
  if (pin.length === 4 || pin.length === 6) {
    for (let i = 0; i < pin.length; i++) {
      if (!digits.has(parseInt(pin[i]))) { // also includes NaN to check against the Set
        validPinStatus = false;
      }
    }
  } else {
    validPinStatus = false
  }
  return validPinStatus;
}