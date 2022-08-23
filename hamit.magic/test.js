function showVerticalMessage(str) {
    let result = '';
    for (let i = 0; i < Math.min(7, str.length); i++) {
        if (i == 0) {
            if (str[i] == `s`) {
                result += str[i].toUpperCase();
            }
            else result += str[i];
        }
        else result += '\n' + str[i];
    }
    return result;
}
console.log(showVerticalMessage('stradaet'));