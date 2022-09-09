let button = document.getElementById("button")
let result = document.getElementById("result")

button.addEventListener("click", calc)

	function calc () {
		let number1 = document.getElementById("number1").value;
		let number2 = document.getElementById("number2").value;
		let operation = document.getElementById("operation").value;
		let results;
	
		if (number1 === "" || number2 === "") {
			alert("Заполните все пустые поля!")
		} else {
			switch (operation) {
				case '+':
					results = (+number1 + +number2);
					result.innerHTML = +results.toFixed(10)
					break;
				case '*': 
					results = (+number1 * +number2);
					result.innerHTML = +results.toFixed(10)
					break;
				case '-': 	
					results = (+number1 - +number2);
					result.innerHTML = +results.toFixed(10)
					break;
				case '/':
					results = (+number1 / +number2)
					result.innerHTML = +results.toFixed(10)
					// проверка специально ниже 
					if (+number2 === 0){
						alert("на ноль делить нельзя")
					} 
		}
		let div = document.createElement('div');
		div.className = "resultx" 
		div.innerHTML = results
		div.addEventListener('click', deleteDiv)
		document.body.append(div)

		function deleteDiv () {
			div.remove()
		}	
	}
}

