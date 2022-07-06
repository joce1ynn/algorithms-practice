// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
  // var arr1 = [4, 8, 15, 16, 23, 42];
  // var arr2 = [1, 2, 3];

  for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  }

  return arr2.sort((a, b) => a - b);
};


// var mergeSorted = function (arr1, arr2) {
//   var result = [];

//   var idx1 = 0;
//   var idx2 = 0;

//   while (idx1 < arr1.length && idx2 < arr2.length) {
//     var num1 = arr1[idx1];
//     var num2 = arr2[idx2];

//     if (num1 < num2) {
//       result.push(num1);
//       idx1++;
//     } else {
//       result.push(num2);
//       idx2++;
//     }
//   }

//   while (idx1 < arr1.length) {
//     var num1 = arr1[idx1];
//     result.push(num1);
//     idx1++;
//   }

//   while (idx2 < arr2.length) {
//     var num2 = arr2[idx2];
//     result.push(num2);
//     idx2++;
//   }

//   return result;
// };
