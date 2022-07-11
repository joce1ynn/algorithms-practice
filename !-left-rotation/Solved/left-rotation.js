// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

const leftRotation = (arr, positions) => {
  while (positions > 0) {
    // delete the first element;
    var first = arr.shift();
    // add it to the end of the array
    arr.push(first);

    positions--;
  }

  return arr;
};

// const leftRotation = (arr, positions) => {
//   if (arr.length === 0) {
//     return;
//   }

//   while (positions > 0) {
//     const first = arr.shift();

//     arr.push(first);

//     positions--;
//   }
// };
