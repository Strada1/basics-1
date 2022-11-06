 //* home work in Strada 
 const operations = {
	add: '+',
	sub: '-',
	mul: '*',
};

for(let prop in operations){
	alert(`все возможные операции: ${operations[prop]}`);
}

function sumCalc(operator, a, b){
	if(typeof a == 'number' && typeof b == 'number'){
		switch(operator){
			case operations.add:
			return a + b;
			case operations.sub:
				return a - b;
				case operations.mul:
					return a * b;
					default:
						alert('Упсс! Error dont have this operations');
		};
	};
};

let result = sumCalc(operations.mul, 2, 13);
alert(`Ответ: ${result}`);