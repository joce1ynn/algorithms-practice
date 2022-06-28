// Write code to return the largest number in the given array

var maxNum = function (arr) {
  var max = arr[0];

  for (var i = 1; i < arr.length; i++) {
    var currentNum = arr[i];

    if (currentNum > max) {
      max = currentNum;
    }
  }

  return max;
};

// var maxNum = function (arr) {
//   //We can use the 3 dots in Javascript function calls to convert an array into a set of arguments for a function
//   return Math.max(...arr);
// };
