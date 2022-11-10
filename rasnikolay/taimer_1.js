function printNumbers(from, to) {
    fromTiem = from * 1000;

    setTimeout(timerId, fromTiem);
    function timerId() {
        let timerId_2 = setTimeout(function repeat() {
            console.log('5');
            timerId_2 = setTimeout(repeat, 1000);
            from++;
            console.log(from);
        }, 1000);
    }

    if (from == to) {
        clearTimeout(timerId);
    }

}

printNumbers(4, 8);