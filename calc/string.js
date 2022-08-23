function showVerticalMessage(str) {
    if (str) {
        if(str.slice(0,1) === str.slice(0,1).toLowerCase()) {
            str = str.charAt(0).toUpperCase() + str.slice(1)
        }
        if (str.length > 7) {
            str = str.slice(0,7)
        }
        for (let char of str)
            console.log(char)

    }else {
        console.log('Nothing')
    }
}

showVerticalMessage('strada1232144')