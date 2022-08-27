function showVerticalMessage(meaning) {
	if (meaning[0] == 's') {
	meaning = meaning[0].toUpperCase() + meaning.slice(1);
 } 
	if (meaning.length > 7) {
	meaning = meaning.slice(0,7) ;
 }
	for ( char of meaning) {
		console.log(char);
	}
}

showVerticalMessage('stradaaa');