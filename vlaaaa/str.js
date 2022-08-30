function showVerticalMessage(str) {
    let result = '';

    if(str[0] == 'м') {
        str = str[0].toUpperCase() + str.slice(1);
    }

    for(let char of str) {
        result += `${char} \n`;
    };
    return result;
};


console.log(showVerticalMessage('марафон'));