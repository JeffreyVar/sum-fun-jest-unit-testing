// import the function from the file you want to test
const { addNumbers } = require('../../solution/equations.js');

// describe the function you are testing
describe('addNumbers function', () => {

  // write a test that should add two positive numbers together
  it('should add two positive numbers together', () => {
    // create your sample inputs
    const [mockNum1, mockNum2] = [3,5]
    // assertion to determine pass/fail
    expect(addNumbers(mockNum1, mockNum2)).toBe(8)
  })

  // write a test that should sum positive and negative numbers together
  it('should sum positive and negative numbers together', () => {
    // assertion to determine pass/fail
    expect(addNumbers(1, -2)).toBe(-1);
  });

  // write a test that should sum positive and negative decimal numbers together
  it('should sum positive and negative decimal numbers together', () => {
    // assertion to determine pass/fail
    expect(addNumbers(-1.5, 3)).toBe(1.5);
  });

  // write a test that should sum correctly with only one value passed in
  it('should sum correctly with only one value passed in', () => {
    // assertion to determine pass/fail
    expect(addNumbers(3)).toBe(3);
  });

  // write a test that should sum two strings with a NaN error
  it('should sum two strings with a NaN error', () => {
    // assertion to determine pass/fail
    expect(addNumbers('foo', 'bar')).toBe(NaN);
  });
  
})
