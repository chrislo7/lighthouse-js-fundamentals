var bottom = 100;
var top = 200;
var three = 'Loopy';
var four = 'Lighthouse';
var twelve = 'LoopyLighthouse';

for (var i = bottom; i <= top; i++) {
  if (i % 3 === 0 && i % 12 !== 0) {
    console.log(three);
  } else if (i % 4 === 0 && i % 12 !== 0) {
    console.log(four);
  } else if (i % 12 === 0) {
    console.log(twelve);
  } else {
    console.log(i);
  }
}
