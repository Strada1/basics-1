'use stict'


function showVerticalMessage(str) {
	for (let i = 0; i < str.length && i < 7; i++) {
		if (str[0] == 's') {
			str = str[0].toUpperCase() + str.slice(1)
		}
		console.log(str[i]);
	}
}

showVerticalMessage('stradazzz')