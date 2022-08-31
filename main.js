// homeWork Learn.js №1 from setInterval
function printNumbers(from, to) {
  for (; from <= to; from++) {
    console.log(from);
  }
}
let timerId = setInterval(printNumbers, 100, 0, 10);
setTimeout(() => clearInterval(timerId), 100);

// from setTimeout

function printNumbers(from, to) {
  for (; from <= to; from++) {
    console.log(from);
  }
}
let timerId = setTimeout(() => setTimeout(printNumbers, 100, 0, 10), 100);
