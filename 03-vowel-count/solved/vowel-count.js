// Write code to return the the number of vowels in `str`

// vowel: a o i e u
var vowelCount = function (str) {
  var num = 0;
  var newStr = str.toLowerCase();
  for (var i = 0; i < newStr.length; i++) {
    if (
      (newStr[i] == "a") |
      (newStr[i] == "o") |
      (newStr[i] == "i") |
      (newStr[i] == "e") |
      (newStr[i] == "u")
    ) {
      num++;
    }
  }
  return num;
};
