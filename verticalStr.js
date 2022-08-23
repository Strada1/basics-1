
function showVerticalMessage(str) {

   if (str[0].toUpperCase() == 'S') {
      str = str[0].toUpperCase() + str.slice(1);
   }

   str = str.split(``, 7).join(`\n`);

   return console.log(str);

}


showVerticalMessage('strada');
showVerticalMessage('stradastrada');
showVerticalMessage('21stradastradastradastrada');
showVerticalMessage('vtradarada');