// homeWork Learn.js №1 from setInterval
function printNumbers(from, to) {
  setInterval(() => {
    if (from <= to) {
      console.log(from);
      from++;
    }
  }, 1000);
}
printNumbers(0, 10);
// from setTimeout
function printNumbers(from, to) {
  setTimeout(function run() {
    if (from <= to) {
      console.log(from);
      from++;
    }
    setTimeout(run, 1000);
  }, 1000);
}
printNumbers(0, 10);
