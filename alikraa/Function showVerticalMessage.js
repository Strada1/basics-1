function showVerticalMessage(message) {
    let maxlength = 7;
    let newMessage = '';

    if (typeof message !== 'string' || message === '') return false;

    if (message[0] === 's') {
        newMessage = message[0].toUpperCase() + message.slice(1, maxlength)
        for (let char of newMessage) {
            console.log(char)
        }
    } else {
        newMessage = message.slice(0, maxlength)
        for (let char of newMessage) {
            console.log(char)
        }
    }
}

showVerticalMessage('strada');