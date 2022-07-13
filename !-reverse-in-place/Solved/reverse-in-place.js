// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

// const reverseInPlace = (arr) => {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     const temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
//   }

//   return arr;
// };

const reverseInPlace = (arr) => {
  // for loop to check every element, and add to new arr

  for (var i = 0; i < arr.length / 2; i++) {
    var last = arr.length - 1 - i;
    [arr[i], arr[last]] = [arr[last], arr[i]];
  }

  return arr;
};

// const reverseInPlace = (arr) => {
//   // var arr = [2, 4, 6, 8];
//   var newArr = [];
//   // for loop to check every element, and add to new arr
//   for (var i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   // return new arr
//   return newArr;
// };
