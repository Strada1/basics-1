function printNumbers1(from, to) {
  let counterfrom = from;

  counter = setInterval(function () {
    console.log(counterfrom);
    if (counterfrom === to) {
      clearInterval(counter);
      console.log("1 число превысило 2");
    }
    counterfrom++;
  }, 500);
}


function printNumbers2 (from, to) {
  let counterfrom = from

  setTimeout(function timer () {
    console.log(counterfrom);
    if (counterfrom < to) {
      setTimeout(timer, 100);
    } else {
      console.log("1 число превысило 2");
    }
    counterfrom++
  }, 500)
}

