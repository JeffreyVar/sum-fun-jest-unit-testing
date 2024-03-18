// import the function from the file you want to test

// const addNumbers = require('../modules/equations');

const { addNumbers } = require('../modules/equations');

// describe the function you are testing
describe('addNumbers function', () => {

  // write a test that should add two positive numbers together
  it('should add 2 positive numbers', () => {
    // create your sample inputs
    // const mockNum1 = 3
    // const mockNum2 = 5

    const [mockNum1, mockNum2, mockNum3, mockNum4, mockNum5, mockNum6] = 
      [3, 5, 9, 20, 12, 21];

    // assertion to determine if pass/fail
    expect.assertions(3)
    expect(addNumbers(mockNum1, mockNum2)).toBe(8);
    expect(addNumbers(mockNum3, mockNum4)).toBe(29);
    expect(addNumbers(mockNum5, mockNum6)).toBe(33);
  });

  // write a test that should sum positive and negative numbers together
  it('should sum positive and negative numbers', () => {
    // assertion to determine pass/fail
    expect(addNumbers(1, -2)).toBe(-1);
  });


  // write a test that should sum positive and negative decimal numbers together
  it('should sum positive and negative decimal numbers', () => {
    // assertion to determine pass/fail
    expect(addNumbers(-1.5, 3)).toBe(1.5);
  });

  // write a test that should sum correctly with only one value passed in
  it('should sum correctly with one value passed in', () => {
    // assertion to determine pass/fail
    expect(addNumbers(3)).toBe(3);
  })
  
  // write a test that should sum two strings with a NaN error
  it('should sum two strings together with an NaN error', () => {
    // assertion to determine pass/fail
    expect(addNumbers('foo', 'bar')).toBe(NaN);
  })

});