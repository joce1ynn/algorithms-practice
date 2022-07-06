// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function (str) {
  var zeroes = 0;
  var ones = 0;

  for (var i = 0; i < str.length; i++) {
    var num = str[i];

    if (num === "0") {
      zeroes++;
    } else if (num === "1") {
      ones++;
    }
  }

  return zeroes === ones;
};

var zeroesAndOnes = function (str) {
  // var str = "00110011";
  // 4 ge 0; 4 ge 1, true

  var result = {};

  // for loop to check each num
  for (var i = 0; i < str.length; i++) {
    var num = str[i];
    if (num in result) {
      result[num]++;
    } else {
      result[num] = 1;
    }
  }

  // if the same, return true
  if (result[0] === result[1]) {
    return true;
  } else {
    return false;
  }
};
