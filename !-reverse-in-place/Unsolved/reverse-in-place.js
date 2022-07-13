// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
  // for loop to check every element, and add to new arr

  for (var i = 0; i < arr.length / 2; i++) {
    var last = arr.length - 1 - i;
    [arr[i], arr[last]] = [arr[last], arr[i]];
  }

  return arr;
};
