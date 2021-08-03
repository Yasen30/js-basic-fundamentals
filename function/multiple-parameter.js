function addTwoNumbers(number1, number2) {
  //   console.log(number1, number2);
  //   console.log(number2);
  var total = number1 + number2;
  return total;
}
var firstNumber = 13;
var secondNumber = 77;
var result = addTwoNumbers(firstNumber, secondNumber);
console.log("sum two numbers", result);
// multiple two numbers
function multifyTwoNumbers(num1, num2) {
  var total = num1 * num2;
  return total;
}
var result = multifyTwoNumbers(7, 17);
console.log("multiple total results", result);

// sub two numbers
function subthreeNumbers(num1, num2, num3) {
  var total = num1 - num2 - num3;
  return total;
}
var result = subthreeNumbers(54, 50, 42);
console.log("sum total results", result);

//division total results
function divisionTwoNumbers(num1, num2) {
  var total = num1 / num2;
  return total;
}
var result = divisionTwoNumbers(66, 6);
console.log("division total results", result);
