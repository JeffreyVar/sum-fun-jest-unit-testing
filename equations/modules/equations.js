// define an 'addNumbers' function that takes two numbers and returns their sum

function addNumbers(num1, num2 = 0) {
  //return num1 + num2;
  
  // convert to numbers

  num1 = Number(num1);
  num2 = Number(num2);

  // check if either number is NaN, return accordingly
  if(isNaN(num1) || isNaN(num2)) {
    return NaN;
  } else {
    return num1 + num2;
  }
}
  
  // convert to numbers in case they are strings

  // check if either number is NaN, and return accordingly
    // setting num 2 default to 0 to handle single value being passed in

// export the function so that you can use it in the tests

module.exports = {
  addNumbers,
};
