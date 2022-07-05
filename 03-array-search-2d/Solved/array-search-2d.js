// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function (arr) {
  // var arr = [
  //     ["X", "O", "O", "O", "X", "O"],
  //     ["O", "X", "O", "O", "O", "O"],
  //     ["O", "O", "O", "O", "X", "X"]
  //   ]
  //return 5

  var sum = 0;

  //for loop to search arr[i],
  for (var i = 0; i < arr.length; i++) {
    // for loop to search x
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "X") {
        sum++;
      }
    }
  }

  return sum;
};

// var arraySearch2D = function (arr) {
//   var count = 0;

//   for (var i = 0; i < arr.length; i++) {
//     for (var k = 0; k < arr[i].length; k++) {
//       if (arr[i][k] === "X") {
//         count++;
//       }
//     }
//   }

//   return count;
// };
