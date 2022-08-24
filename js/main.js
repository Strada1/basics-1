const showVerticalMessage = (str) => {
    let newStr = '';
    if (str[0] === 's') {
        newStr += str[0].toUpperCase() + str.substr(1,6);
    } else {
        newStr += str.substr(0,7);
    }
    for (char of newStr) {
        console.log(char)
    }
}
showVerticalMessage('stradanija')   