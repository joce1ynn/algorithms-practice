// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
  // var arr1 = [4, 8, 15, 16, 23, 42];
  // var arr2 = [1, 2, 3];

  for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  }

  return arr2.sort((a, b) => a - b);
};
