

function showVerticalMessage (str) {

        str = str.slice(0,7);
      
        // Если строка начинается с буквы "s" - нужно вывести эту строку с первой заглавной буквой
        if (str[0]=='s') {
          str = ( str[0].toUpperCase() + str.slice(1,6));
        }

        for (let char of str) {
   
        console.log(char);
     }
  
}

showVerticalMessage("stradanie");