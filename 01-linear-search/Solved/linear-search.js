// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

// var linearSearch = function(arr, target) {
//   for (var i = 0; i < arr.length; i++) {
//     var currentNumber = arr[i];

//     if (currentNumber === target) {
//       return i;
//     }
//   }

//   return -1;
// };



var linearSearch = function (arr, target) {
  // var arr = [82, 22, -4, 21, 1, 8];
  // var target = 8;
  // return 5
  //   return arr.indexOf(target);
  // find index of target in the array
  for (var i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
};