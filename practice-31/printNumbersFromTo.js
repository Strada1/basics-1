function printNumbersUsingTimeout(from, to) {
    let timerId = setTimeout(function count() {
      console.log(from++);
      if(from > to) {
        clearTimeout(timerId);
      } else {
        setTimeout(count, 1000);
      };
    }, 1000, from, to);
  }
  
  
  function printNumbersUsingInterval(from, to) {
    let timerId = setInterval(function count() {
      console.log(from++);
      if(from > to) {
        clearInterval(timerId);
      }
    }, 1000, from, to)
  }
  
  
  printNumbersUsingTimeout(1, 5);
  // printNumbersUsingInterval(6, 10);