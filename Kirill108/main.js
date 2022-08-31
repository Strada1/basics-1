function printNumbers(from, to) {
	for (let i = 0; from + i <= to; i++) {
		let timerId = setInterval(() => console.log(from + i), 1000)
		clearInterval(timerId)
	}
}
	
printNumbers(4, 10)