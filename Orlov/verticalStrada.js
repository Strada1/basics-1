function showVerticalMessage(str) {
   
    if ( typeof str != 'string' || str == '') { // проверка на строку
        console.log(false);   
    }

    if (str[0] == 's') {
       newStr = str[0].toUpperCase() + str.slice(1, 7); 

       for (char of newStr) {
            console.log(char)
        }
    
    } else if (str.length >= 7) {
        str =  str.slice(0, 7)
            
            for (let char of str) {
                console.log(char)
            }
        }
    };

(showVerticalMessage('strada'));
