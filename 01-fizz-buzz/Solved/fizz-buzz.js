// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];

    if (currentNumber % 15 === 0) {
      console.log("Fizz Buzz");
    } else if (currentNumber % 3 === 0) {
      console.log("Fizz");
    } else if (currentNumber % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(currentNumber);
    }
  }
};

// var fizzBuzz = function (arr) {
//   // check if num can be divided by 3/5/15

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 15 === 0) {
//       arr[i] = "Fizz Buzz";
//     } else if (arr[i] % 3 === 0) {
//       arr[i] = "Fizz";
//     } else if (arr[i] % 5 === 0) {
//       arr[i] = "Buzz";
//     }
//     console.log(arr[i]);
//   }
// };