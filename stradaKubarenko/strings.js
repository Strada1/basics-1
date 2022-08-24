function showVerticalMessage(str){
   str = str.toLowerCase();
   let length = str.length;

   if (length => 7) {
      for (let char of str.slice(0,7)) {
         console.log(char);
      }

      if (str[0] == 's') {
         str = str[0].toUpperCase + str.slice(1,7);
      } else {}
      
   } else if (length < 7) {
         console.log ('значение слишком короткое')
   }
}

showVerticalMessage('STRAda -is pain')