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

//*** Excersise ***
function intToRoman(num) {
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

//*** EXPORTS ***
module.exports = {
  store,
  retrieve,
  capitalize,
  multiply,
  isWaterBoiling,
  intToRoman
};