//Пришлось подглядеть чуть , но я понимаю как работает это все , писал сам  !
function showVerticalMesseage(str){
	if(typeof str != 'string' || str == ''){
		console.log('У вас не строка или пропуск');
	}
	if(str[0] == 's'){
		let newRam = str[0].toUpperCase() + str.slice(1,7);
		for(let char of newRam){
			console.log(char);
		}
	}
	else if (str.length >= 7){
		str = str.slice(0,7);
		for(char of str){
			console.log(char);
		}
	}
}
showVerticalMesseage('strada');
console.log('\n')
showVerticalMesseage('strada_how_are_u?');