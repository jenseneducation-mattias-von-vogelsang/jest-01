//*** Excersise 1 & 2, store & retrieve ***
let number;

function store(input) {
  number = input;
}

function retrieve() {
  return number;
}

//*** Excersise 3, capitalize first letter in string ***
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

//*** Excersise 4 ***/
function multiply(x, y) {
  return x * y;
}

//*** Excersise 5 ***/
function isWaterBoiling(degreesCelsius) {
  let answer;
  if (degreesCelsius === "") throw new Error('Input is empty');
  if (degreesCelsius < -237) throw new Error('Input is too cold');
  if (isNaN(degreesCelsius)) throw new Error('Input is not a number');
  if (degreesCelsius >= 100) {
    answer = true;
  } else if (degreesCelsius < 100) {
    answer = false;
  }
  return answer;
}

//*** Excersise 6 ***
function intToRoman(num) {
  if (isNaN(num)) throw new Error('Input is not a number');
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}

/*** Excersise 7 ***/
let storedOrigin;
let storedDestination;

function setOrigin(origin) {
  if (origin == "") throw new Error('origin is empty');
  storedOrigin = origin;
  return true;
}

function bookTrip(destination) {
  if (destination == storedOrigin) throw new Error('origin and destination are the same!');
  storedDestination = destination;
  return true;
}

function goOnTrip() {
  if (storedDestination == "" || storedOrigin == "") {
    throw new Error('origin or destination has not been set.')
  } else if (storedDestination !== storedOrigin) {
    return true
  } else {
    return false
  }
}

function getPosition() {
  if (storedDestination == "" || storedOrigin == "") throw new Error('origin or destination has not been set.')
  let tempOrigin = storedOrigin;
  storedOrigin = storedDestination;
  return tempOrigin;
}

//*** Excersise 8 ***/
class DriverSystem {
  speedLimit = null;

  // Example input:
  // "B", 18 -> true,  "B", 17 -> false
  // "C", 21 -> true,  "C", 20 -> false
  // If licenseType is not a valid license this method
  // should throw an exception
  canGet(licenseType, ageYears) {
    if (licenseType != 'B' && licenseType != 'C') {
      throw new Error('Licensetype does not exist')
    } else if ((licenseType == 'B' && ageYears == 18) || (licenseType == 'C' && ageYears == 20)) {
      return true;
    } else {
      return false
    }
  }

  // If given a proper value, changes the speed limit to the new value
  setSpeedLimit(newLimit) {
    this.speedLimit = newLimit;
    return true;
  }

  // Returns true or false depending on whether the speed
  // is higher than the limit
  isSpeeding(speed) {
    if (speed <= this.speedLimit) {
      return false
    } else {
      return true;
    }
  }
}

//*** EXPORTS ***
module.exports = {
  store,
  retrieve,
  capitalize,
  multiply,
  isWaterBoiling,
  intToRoman,
  setOrigin,
  bookTrip,
  goOnTrip,
  getPosition,
  DriverSystem
}