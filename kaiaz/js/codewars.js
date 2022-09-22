// function buildFun(n) {
//   var res = [];

//   for (var i = 0; i < n; i++) {
//     res.push(
//       (function (index) {
//         return function () {
//           return index;
//         };
//       })(i)
//     );
//   }
//   return res;
// }

// let res = buildFun(5);
// console.log(res);

function getAverage(marks) {
  let result =
    marks.reduce((sum, item) => {
      return sum + item;
    }) / marks.length;
  return Math.floor(result);
}

console.log(getAverage([3, 3, 5, 12]));
