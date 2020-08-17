const script = require('./excersises.js');
const {
  store,
  retrieve,
  capitalize,
  multiply,
  isWaterBoiling,
  intToRoman
} = script;


//*** Excersise 1 & 2 ***
it('should store a number then return it(1)', () => {
  // jest har funktionerna it, expect och toBe

  //förbereda testet, Arrange
  const x = 1;

  //kalla funktionerna som ska testas, Act
  store(x)
  let expected = retrieve(); // returnerar 1

  //kör själva testet, Assert
  expect(x).toBe(expected);
})

it('should return the latest number passed to store(100)', () => {
  //förbereda testet, Arrange
  const x = 2,
    y = 100;

  //kalla funktionerna som ska testas, Act
  store(x);
  store(y);
  let expected = retrieve(); // returnerar 100

  //kör själva testet, Assert
  expect(y).toBe(expected);
})

//*** Excersise 3 ***/
it('pass a string to a function which returns the string with a capital first letter', () => {
  //Arrange
  let string = 'hej kära barn';

  //Act
  let expected = 'Hej kära barn';
  let actual = capitalize(string)

  //Assert
  expect(actual).toBe(expected);
});

//*** Exercise 4 ***/
it('pass 2 numbers to a function which multiplies them and returns the result', () => {
  //Arrange
  const x = 10,
    y = 20;

  //Act
  let expected = 10 * 20;
  let actual = multiply(x, y);

  //Assert
  expect(actual).toBe(expected);
})

//*** Excersise 5 ***/
it('checks if water is hot enough to boil, returns true if over 100c', () => {
  //Arrange
  const degreesCelsius = 106;
  let expected;
  const actual = true;

  //Act
  expected = isWaterBoiling(degreesCelsius)

  //Assert
  expect(actual).toBe(expected)
})

it('checks if water is hot enough to boil, returns false', () => {
  //Arrange
  const degreesCelsius = 90;
  let expected;
  const actual = false;

  //Act
  expected = isWaterBoiling(degreesCelsius)

  //Assert
  expect(actual).toBe(expected)
})

it('checks if input sent to function gets thrown', () => {
  //Arrange
  const degreesCelsius = '';

  //Act
  let maybeError = () => isWaterBoiling(degreesCelsius);

  //Assert
  expect(maybeError).toThrow();
})

//*** Excersise 6 ***/
it("expect swingToRoman to return to roman numbers not numbers ", () => {
  //Arrange
  const number = "3";
  let actual = "III";

  //Act
  expected = intToRoman(number);

  //Assert
  expect(actual).toBe(expected);
});