function showVerticalMessage(str){
   str = str.toLowerCase();
   let length = str.length;



   if (length => 7) {
      for (let char of str.slice(0,7)) {
         console.log(char);
      }

      if (str[0] == 's') {
         str[0].toUpperCase();
      } else {}
      
   } else if (length < 7) {
         console.log ('значение слишком короткое')
   }
}

showVerticalMessage('STRAda -is pain')