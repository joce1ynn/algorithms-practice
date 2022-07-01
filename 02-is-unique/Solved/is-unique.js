// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
  var numMap = {};

  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];

    if (numMap[currentNumber] === true) {
      return false;
    }

    numMap[currentNumber] = true;
  }

  return true;
};

var isUnique = function (arr) {
  // var arr = [2, 8, 7, 5, 4, 3];
  // true
  //for loop to chech the #
  for (var i = 0; i < arr.length; i++) {
    // if repeat, return false
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      return false;
    }
  }

  // otherwise return true
  return true;
};
