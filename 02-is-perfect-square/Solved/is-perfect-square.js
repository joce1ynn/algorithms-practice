// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method
var isPerfectSquare = function (num) {
  // var num = 36;
  // true, return 6
  var sqrtNum = Math.sqrt(num);
  return Number.isInteger(sqrtNum);
};

var isPerfectSquare = function (num) {
  for (var i = 0; i <= num; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
};

// var isPerfectSquare = function(num) {
//   var i = 0;

//   while (true) {
//     var currentSquare = i * i;

//     if (currentSquare === num) {
//       return true;
//     } else if (currentSquare > num) {
//       return false;
//     } else {
//       i++;
//     }
//   }
// };
