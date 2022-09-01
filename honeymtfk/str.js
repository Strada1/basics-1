function ucFirst(str) {
	if (typeof str != "string") {
		console.log ("This is impossible!")
	} else {
		console.log(str[0].toUpperCase() + str.slice(1));
	}
}

//Моя версия 
function checkSpam(str) {
	if (typeof str != "string") {
		console.log ("This is impossible!")
	} else if (str.includes("Viagra") || str.includes("XXX")) {
		console.log(true);
	} else {
		console.log(false);
	}
}

//Версия с LearnJS
function spamCheck(str) {
	let lowerStr = str.toLowerCase();
	return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

function truncate(str, maxlength) {
	if (str.length <= +maxlength) {
		console.log (str.slice(0, +maxlength))
	} else if (str.length > +maxlength) {
		console.log(str.slice(0, +maxlength) + "...");
	} else {
		console.log("This is impossible!");
	}
}

function showVerticalMessage(str) {
	if (typeof str != "string") {
		console.log("This is impossible!");
	} else if (str.length >= 7) {
		let fixStr = str.slice(0, 8);
		for (let char of fixStr) {
			console.log(char);
		}
	} else if (str.includes("s")) {
		let upperStr = str[0].toUpperCase();
		let newStr = upperStr + str.slice(1)
		for (let char of newStr) {
			console.log(char);
		}
	} else {
		for (let char of str) {
			console.log(char);
		}
	}
}

ucFirst("javascript")
checkSpam("Viagra, XXX")
checkSpam("Strada")
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);
truncate(true, 20);
showVerticalMessage("strada");
showVerticalMessage("i love javascript");
showVerticalMessage(true);

