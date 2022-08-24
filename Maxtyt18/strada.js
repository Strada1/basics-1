function showVerticalMessage(str) {
	if (str[0] == 's') {
		str = str[0].toUpperCase() + str.slice(1);
	}
	if (str.length > 7) {
		str = str.slice(0, 7);
	}
	for (let i = 0; i < str.length; i++) {
		console.log(str[i]);
	}
}
showVerticalMessage('strada')
showVerticalMessage('elemental')