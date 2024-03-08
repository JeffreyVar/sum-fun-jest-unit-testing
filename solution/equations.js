// define an 'addNumbers' function that takes two numbers and returns their sum
function addNumbers(num1, num2 = 0) {
  
  // convert to numbers in case they are strings
  num1 = Number(num1);
  num2 = Number(num2);

  // check if either number is NaN, and return accordingly
  if (isNaN(num1) || isNaN(num2)) {
    return NaN;
  } else {
    return num1 + num2;
  }
}

// export the function so that you can use it in the tests
module.exports = {
  addNumbers
};
