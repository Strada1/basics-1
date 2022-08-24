function showVerticalMessage(str) {

    if (str[0].toUpperCase() == 'S') {
        str = str[0].toUpperCase() + str.slice(1);
   }

   return console.log(str.split(``, 7).join(`\n`));
}

showVerticalMessage('strada');
showVerticalMessage('stradastrada');
showVerticalMessage('21stradastradastradastrada');
showVerticalMessage('vtradarada'); 

