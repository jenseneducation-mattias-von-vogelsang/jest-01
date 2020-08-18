const script = require('./excersises.js');
const {
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
} = script;

// const {
//   DriverSystem
// } = require('./driverSystem.js');
// jest.mock('./driverSystem.js')

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
it("expect intToRoman to return to roman numbers not numbers ", () => {
  //Arrange
  const number = "3";
  let actual = "III";

  //Act
  expected = intToRoman(number);

  //Assert
  expect(actual).toBe(expected);
});

//*** Excersise 7 ***/
it("pass a origin(country) which is stored, returns true if origin == location", () => {
  //Arrange
  const origin = 'Sweden';
  let actual = true;

  //Act
  let expected = setOrigin(origin);

  //Assert
  expect(actual).toBe(expected);
})

it("pass destination to book a trip. Returns false if origin is not stored or destination is not passed in parameter", () => {
  //Arrange
  const destination = 'England';
  let actual = true;

  //Act
  let expected = bookTrip(destination);

  //Assert
  expect(actual).toBe(expected);
})

it("requires origin and destination values to be stored before calling, returns false if values are incorrect, error if both values doesnt exist", () => {
  //throw error if origin || destination is not set
  //Arrange
  let actual = true;

  //Act
  let expected = goOnTrip();

  //Assert
  expect(actual).toBe(expected);
})

it("call function to get the stored origin, after trip has been made it makes (origin = destination)", () => {
  //Arrange
  let actual = 'Sweden';

  //Act
  let expected = getPosition();

  //Assert
  expect(actual).toBe(expected);
})

//*** Excersise 8 ***/
//Create classinstance of DriverSystem
const driverClass = new DriverSystem();
it("pass and age and licensetype to a function to check if age is old enough to get that type of license, returns true if true", () => {
  //Arrange
  const ageYears = 18;
  const licenseType = 'B';
  let actual = true;

  //Act
  let expected = driverClass.canGet(licenseType, ageYears);

  //Assert
  expect(actual).toBe(expected);
})

it("pass and age and licensetype to a function to check if age is old enough to get that type of license, throw error for invalid licensetype", () => {
  //Arrange
  const ageYears = 18;
  const licenseType = 'Ö';

  //Act
  let maybeError = () => driverClass.canGet(licenseType, ageYears);

  //Assert
  expect(maybeError).toThrow();
})

it("pass a number to set a new speedlimit", () => {
  //Arrange
  const newLimit = 180;
  let actual = true;

  //Act
  let expected = driverClass.setSpeedLimit(newLimit);

  //Assert
  expect(actual).toBe(expected);
})

it("pass current speed to see if it exceeds current speedlimit, returns true or false", () => {
  //Arrange
  const speed = 140;
  let actual = false;

  //Act
  let expected = driverClass.isSpeeding(speed);

  //Assert
  expect(actual).toBe(expected);
})