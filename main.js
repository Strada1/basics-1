const numbers = {
	ten: 10,
	zero: 0
}

const button = document.getElementById("button")
const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const operation = document.getElementById("operation")

let result = document.getElementById("result")

button.addEventListener("click", calc)

	function calc () {
		let number1Value = Number(number1.value);
		let number2Value = Number(number2.value);
		let operationValue = operation.value;

		let results;
	
		if (number1Value === "" || number2Value === "") {
			alert("Заполните все пустые поля!")
		} else {
			switch (operationValue) {
				case '+':
					results = (number1Value + number2Value);
					result.innerHTML = results.toFixed(numbers.ten)
					break;
				case '*': 
					results = (number1Value * number2Value);
					result.innerHTML = results.toFixed(numbers.ten)
					break;
				case '-': 	
					results = (number1Value - number2Value);
					result.innerHTML = results.toFixed(numbers.ten)
					break;
				case '/':
					results = (number1Value / number2Value)
					result.innerHTML = results.toFixed(numbers.ten)
					if (number2Value === numbers.zero){
						alert("на ноль делить нельзя")
					} 
		}
		let div = document.createElement('div');
		div.className = "resultx" 
		div.innerHTML = results
		div.addEventListener('click', deleteDiv)
		document.body.append(div)

		function deleteDiv (event) {
			event.currentTarget.remove()
		}	
	}
}