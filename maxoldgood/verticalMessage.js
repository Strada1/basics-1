function showVerticalMessage(str) {
    console.log ( (str[0]==="s") ? str[0].toUpperCase() : str[ 0]);
    for (let pos=1; pos <= 6; pos++) {
        if (!str[pos]) {break;} 
        else console.log (str[pos]);
    }
}
showVerticalMessage("strada");