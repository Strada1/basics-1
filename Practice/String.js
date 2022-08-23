function showVerticalMessage(str) {

    str = str.substr(0,7);

    if(!str) {
        console.log('mistake');
    }

    else if (str[0] > str[0].toUpperCase()) {
       str = (str[0].toUpperCase() + str.slice(1))

        for (let char of str) {
            console.log (char);
        }
    }
    else {

        for (let char of str) {
            console.log (char);
    }

    }
}

showVerticalMessage('');