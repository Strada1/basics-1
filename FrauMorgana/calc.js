function isNumbers (a,b){
	let isNumber = (typeof(a) == 'number' && 
	typeof(b) == 'number' && 
	!isNaN(a) && 
	!isNaN(b) &&
	isFinite(a) &&
	isFinite(b));
	return isNumber;
	};

function calc(a,b,operation){
	if (isNumbers(a,b)){
		switch(operation){
			case 'add':
				console.log(+a + +b);
			break;
			case 'multi':
				console.log(a * b);
			break;
			case 'subtract':
				console.log(a - b);
			break;
			default:
				console.log('incorrect operation');
	};
}
	else console.log('invalid operand');
};

calc(10, NaN,'subtract');