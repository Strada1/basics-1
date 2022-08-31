function printNumbers(from, to) {
	
	let arrFromTo = [from, to]

	let i = 0;
	while (i < to) {
		if (arrFromTo[i] < to) {
			
			arrFromTo.splice(i, 0, arrFromTo[i] + 1 )
			i++;
		}
	}
		
	function printArr() {
		for (i; i < to; i++) {
			console.log(arrFromTo[i] + ",")
		}
	}

	let timerId = setInterval(printArr, 1000)

	if (i == to) {
		clearTimeout(timerId)
	}
	console.log(arrFromTo)
}

printNumbers(1, 10)


