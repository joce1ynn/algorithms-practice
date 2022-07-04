// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function (arr) {
  // var arr = [3, 4, 7, 2];

  // sort array
  arr = arr.sort((a, b) => a - b);

  var sum = 0;
  var element = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum <= 60) {
      element = i + 1;
    }
  }

  // when sum <= 60
  if (sum <= 60) {
    return arr.length;
  }
  // when sum > 60 
  else {
    return element;
  }
};

// var mostSongsInPlaylist = function (arr) {
//   var sortedArr = arr.sort((a, b) => a - b);
//   var sum = 0;
//   var element = 0;

//   for (var i = 0; i < sortedArr.length; i++) {
//     var currentSongDuration = sortedArr[i];

//     if (sum + currentSongDuration <= 60) {
//       sum += currentSongDuration;
//       element++;
//     } else {
//       return element;
//     }
//   }

//   return element;
// };
