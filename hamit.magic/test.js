function showVerticalMessage(str) {
    let length = str.length < 7 ? str.length : 7;
    let result = '';
    for (let i = 0; i < length; i++) {
        if (i == 0) result += str[i].toUpperCase(); 
        else result += '\n' + str[i].toLowerCase();
    }
    return result;
}
console.log(showVerticalMessage('strYda'));