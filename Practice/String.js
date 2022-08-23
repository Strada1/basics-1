function showVerticalMessage(str) {

    if(!str) {
        console.log('mistake');
    }

    else if (str[0] > str[0].toUpperCase()) {
       str = (str[0].toUpperCase() + str.slice(1)).substr(0,7);

        for (let char of str) {
            console.log (char);
        }
    }
    else {
        str = str.substr(0,7);

        for (let char of str) {
            console.log (char);
    }

    }
}

showVerticalMessage('beautiful');