function showVerticalMessage(str) {
	let verticalStr = '';

	if (typeof str === 'string' && str.trim().length !== 0) {
		if (str.length > 7) verticalStr += str.split('', 7).join('\n');
		else verticalStr = str.split('').join('\n');
	} else {
		return 'input string';
	}

	return verticalStr[0] === 's' ? verticalStr[0].toUpperCase() + verticalStr.slice(1) : verticalStr;
}

//learn js tasks - 1
function ucFirst(str) {
	if (!str) return str;

	return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst('saba'));

//learn js tasks - 2
function checkSpam(string) {
	let trigerWords = ['xxx', 'viagra'];
	let lowerStr = string.toLowerCase(string);

	return lowerStr.includes(trigerWords[0]) || lowerStr.includes(trigerWords[1]);
}

//learn js tasks - 3
function truncate(str, maxLength) {
	if (str.length > maxLength) {
		return str.slice(0, maxLength) + '...';
	} else {
		return str;
	}
}

//learn js tasks - 4
function extractCurrencyValue(str) {
	return +str.slice(1);
}
