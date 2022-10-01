// task 1

/**
 * Prints a number every second,
 * starting from from and ending with to.
 *
 * setInterval is used to print numbers
 * and recursive setTimeout is used to
 * stop the setInterval when the last number
 * was displayed.
 */
const printNumbersFirst = function(from, to)  {
     let counter = from;

      let id = setInterval(() =>  {
        console.log(counter++);
      }, 1000);

      setTimeout(function run()  {
         if (counter > to)  {
             clearInterval(id);
         } else  {
             setTimeout(run);
         }
      });
};

printNumbersFirst(1, 4);

// does the same thing without recursive setTimeout
const printNumbersSecond = function (from, to) {
    let counter = from;

    let id = setInterval(() =>  {
        console.log(counter++);

        if (counter > to)  {
            clearInterval(id);
        }
    }, 1000);
};

printNumbersSecond(5, 8);

/*
 does the same thing, but with recursive setTimeout
 instead of setInterval
 */
const printNumbersThird = function (from, to) {
  let counter = from;

  let id = setTimeout(function run() {
      console.log(counter++);

      if (counter <= to)  {
          setTimeout(run, 1000);
      }
  }, 1000);
};

printNumbersThird(9, 10);