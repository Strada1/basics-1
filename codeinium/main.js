function showVerticalMessage(str) {
    if (str) {
        str = String(str);
        if (str[0] === 's') {
            str = 'S' + str.slice(1);
        }
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
        console.log('error');
    }
    
}

showVerticalMessage('strada');
showVerticalMessage('gtrada');
showVerticalMessage('strada dot one');
showVerticalMessage(214343434);
showVerticalMessage();
