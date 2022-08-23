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

//learn js tasks
