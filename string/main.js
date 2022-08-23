
function  showVerticalMessage(str) {
    if(!str){
        console.log('Введите строку');
        return str;
    }
    let newStr = str.slice(0,7);
    newStr = newStr[0].toUpperCase() + newStr.slice(1);
    if (newStr.startsWith('s') || newStr.startsWith('S')){
        for (let char  of newStr){
            console.log(`${char}`);
        }
    } else {
        console.log(`Cтрока начинается с буквы ${str[0]}, напишите строку начинающуюся с буквы S`)
    }
}

showVerticalMessage('stradakkkkkk' );