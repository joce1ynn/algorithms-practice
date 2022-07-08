// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function (arr1, arr2) {
  //   var arr1 = [1, 2, 3, 4];
  //   var arr2 = [3, 4, 5, 6];
  //   return [3, 4];

  var arr = [];
  // check arr1 and arr2
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      // if same, add to arr
      if (arr1[i] === arr2[j]) {
        arr.push(arr1[i]);
      }
    }
  }

  return arr;
};

var arrayIntersection = function (arr1, arr2) {
  var numMap = {};
  var result = [];

  for (var i = 0; i < arr1.length; i++) {
    var num = arr1[i];

    if (numMap[num] === undefined) {
      numMap[num] = 1;
    } else {
      numMap[num]++;
    }
  }

  for (var i = 0; i < arr2.length; i++) {
    var num = arr2[i];

    if (numMap[num]) {
      result.push(num);
      numMap[num]--;
    }
  }

  return result;
};
