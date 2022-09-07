let number1 = document.getElementById("number1").value;
let number2 = document.getElementById("number2").value;
let operation = document.getElementById("operation").value;

let button = document.getElementById("button")

let result = document.getElementById("result")

button.addEventListener("click", calc)

function calc (operation, number1, number2) {
	let results;
	switch (operation) {
		case '+':
			results = (number1 + number2);
			result.innerHTML = +results
			break;
		case '*': 
			results = (number1 * number2);
			result.innerHTML = +results
			break;
		case '-': 	
			results = (number1 - number2);
			result.innerHTML = +results
			break;
	}
}


