// functions

function sum (num1, num2) {
  let result = num1 + num2
  return result
}

const sum1 = function (num1, num2) {
  return num1 + num2
}

// ECMASCRIPT 5 a 6 ... ES5, ES6
// arrow functions

const sum2 = (num1, num2) => {
  return num1 + num2
}

const sum3 = (num1, num2) => num1 + num2

const double = num => 2 * num

