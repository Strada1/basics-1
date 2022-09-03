// homework №34 codewars №1

function buildFun(n) {
  var res = [];

  for (var i = 0; i < n; i++) {
    res.push(
      (function (i) {
        return function () {
          return i;
        };
      })(i),
    );
  }
  return res;
}
for (var i = 0; i < 10; i++) {
  console.log(buildFun(10)[i]());
}
// homework №34 codewars №2

function getAverage(marks) {
  let sum = marks.reduce((sum, number) => sum + number);
  return Math.floor(sum / marks.length);
}

console.log(getAverage([2, 2, 2, 2]));
