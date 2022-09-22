function printNumbers(f, t) {
  let ticks = f;
  let timerId = setInterval(function () {
    console.log(`Tick ${ticks}`);
    if (ticks == t) {
      clearInterval(timerId);
    }
    ticks++;
  }, 1000);
}

// printNumbers(1, 12);

function printNumbers2(f, t) {
  let ticks = f;
  setTimeout(function tack() {
    console.log(`Tick ${ticks}`);
    ticks++;
    if (ticks < +t) {
      setTimeout(tack, 1000);
    }
  }, 1000);
}

printNumbers2(5, 12);
