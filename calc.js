function calc() {

    let a = +document.getElementById("firstNumber").value;
    let b = +document.getElementById("secondNumber").value;
    let operate = String(document.getElementById('choice').selectedIndex);
    console.log();
    switch (operate) {
        case '0':
            document.querySelector('.result').innerHTML = a + b;
            break;
        case '1':
            document.querySelector('.result').innerHTML = a * b;
            break;
        case '2':
            document.querySelector('.result').innerHTML = a - b;
            break;
        case '3':
            document.querySelector('.result').innerHTML = a / b;
            break;
    }  
}