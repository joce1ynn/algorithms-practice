// const multiplyInto20 = function(arr) {
//   const numMap = {};

//   for (let i = 0; i < arr.length; i++) {
//     let currentNum = arr[i];

//     let neededNumber = 20 / currentNum;

//     if (numMap[neededNumber]) {
//       return true;
//     }
//     numMap[currentNum] = true;
//   }

//   return false;
// };


const multiplyInto20 = function (arr) {
  // var arr = [3, 4, 5, 7, 9];
  // 4*5=20 true

  var result = 20;

  for (var i = 0; i < arr.length; i++) {
    var element = 20 / arr[i];
    if (arr.includes(element)) {
      return true;
    }
  }

  return false;
};
