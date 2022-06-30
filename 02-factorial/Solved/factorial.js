// Write code to create a function that returns the factorial of `num`

// my solution
var factorial = function (num) {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// var factorial = function (num) {
//   var result = 1;

//   for (var i = num; i > 1; i--) {
//     result = result * i;
//   }

//   return result;
// };
