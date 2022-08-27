const showVerticalMessage = (str) => {
    if (str.length > 7 ) {
        str = str.slice(0, 7);
    }
    
    if(str[0] == 's') {
        str = `${str[0].toUpperCase()}${str.slice(1)}`
    }

    str.split('').forEach(item => console.log(item))
}

showVerticalMessage('strada')