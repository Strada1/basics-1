
function  showVerticalMessage (str){
    str = str.trim();
    let result = '';
    for (let i = 0; i < Math.min(7, str.length); i++){
        if (i === 0 && str[0].toLowerCase() === 's')
            result += 'S';
        else
            result += str[i];
        result += '\n';
    }
    console.log(result);
}


showVerticalMessage('   strada')
showVerticalMessage('123456789')
