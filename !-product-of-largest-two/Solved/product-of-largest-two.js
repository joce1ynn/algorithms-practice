// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
  // find the first largest
  var largest = Math.max(...arr);

  // find index of the largest, and remove it
  arr.splice(arr.indexOf(largest), 1);

  // find the second largest
  var secondLargest = Math.max(...arr);

  // return the product
  return largest * secondLargest;
};

// var productOfLargestTwo = function (arr) {
//   var largest = null;
//   var secondLargest = null;

//   for (var i = 0; i < arr.length; i++) {
//     var currentNumber = arr[i];

//     if (currentNumber > largest || largest === null) {
//       secondLargest = largest;
//       largest = currentNumber;
//     } else if (currentNumber > secondLargest || secondLargest === null) {
//       secondLargest = currentNumber;
//     }
//   }

//   return largest * secondLargest;
// };
