
function counter(from, to) {
  let count = setInterval(counter, 1000);
  from++;
  console.log(from)
  if (from === to) {
    clearInterval(count);
    console.log("1 число превысило 2");
  }
}

counter(1, 10);
