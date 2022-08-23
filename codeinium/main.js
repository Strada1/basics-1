function showVerticalMessage(str) {
    if (str) {
        str = String(str);
        str = str[0].toUpperCase() + str.slice(1);
        if (str.length >= 7) {
            for (let char of str.slice(0, 7)) {
                console.log(char); 
            }
        } else {
            for (let char of str) {
                console.log(char); 
            }
        }
    } else {
        console.log(str);
    }
    
}

showVerticalMessage('strada');
showVerticalMessage('strada dot one');
showVerticalMessage(21444344);
showVerticalMessage();
