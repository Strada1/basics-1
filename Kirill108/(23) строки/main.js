function showVerticalMessage(str) {
	if (str) {
		if(str.slice(0, 1) == 's') {
			str = 'S' + str.slice(1)
		}
	
		if (str.length > 7) {
			str = str.slice(0, 7)
		}
	
		for (let char of str)
	
			console.log(char)	
	} else {
		console.log("Пустая строка :/")
	}
	
}

showVerticalMessage('stradaaaaa')





