// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

// const reverse = (str) => {
//   let result = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     const letter = str[i];
//     result += letter;
//   }

//   return result;
// };

const reverse = (str) => {
  // const str = "just keep swimming";
  // "gnimmiws peek tsuj";
  var arr = str.split("");
  var reversedArr = arr.reverse();
  return reversedArr.join("");
};
