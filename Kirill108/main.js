let timerId = setTimeout(function printNumbers(from, to) {
	let counter = from;
	
	console.log(counter);
	counter++;

	timerId = setTimeout(printNumbers, 1000, 4, 10); // (*)
  }, 1000);