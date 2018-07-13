function loopyLighthouse (range, multiplies, words) {

  for (var i = range[0]; i <= range[1]; i++) {
    var wOne = words[0];
    var wTwo = words[1];
    var wThree = wOne + "" + wTwo;
    var mOne = multiplies[0];
    var mTwo = multiplies[1];
    var mThree = mOne * mTwo;

    if (i % mThree === 0) {
      console.log(wThree);
    } else if (i % mOne === 0) {
      console.log(wOne);
    } else if (i % mTwo === 0) {
      console.log(wTwo);
    } else {
      console.log(i);
    }
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

