function Calc() {
    const elem = document.getElementById('action-select');
    let first = document.getElementById('first');
    first = first.textContent;
    let second = document.getElementById('second');
    second = second.textContent;
    let answer = document.getElementById('answer')
    let result;

    switch (elem) {
        case elem.value="+":
            result = +first + +second;
            break;
        case elem.value="-":
            result = +first - +second;
            break;
        case elem.value="*":
            result = +first * +second;
            break;
        case elem.value="/":
            result = +first / +second;
            break;
    }
    return answer.textContent = result;
}


button.addEventListener('click', Calc);