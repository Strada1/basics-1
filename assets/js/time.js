

function timeConverter(unixTime) {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

export { timeConverter, padTo2Digits}



