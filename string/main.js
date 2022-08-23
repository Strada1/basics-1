
function  showVerticalMessage(str) {
    if(!str){
        console.log( 'Введите строку' );
        return str;
    }
    let newStr = str.trim();
    newStr = newStr.slice(0,7);
    if ( newStr.startsWith('s') || newStr.startsWith('S') ){
        newStr = newStr[0].toUpperCase() + newStr.slice(1);
        for ( let char of newStr ){
            console.log(`${char}`);
        }
    } else {
        for ( let char of newStr ){
            console.log(`${char}`);
        }
    }
}

showVerticalMessage('stradakkkkkk  авп  пвап  вапв' );