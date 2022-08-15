function pow(x,n) {
    let result = x;

    for (i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert(pow(x,n));
}

if (browser == "Edge") {
    alert("You've got the Edge!");
} else if ( browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
        alert('Okay we support these browsers too');
    } else {
        alert('We hope tha this page looks ok!');
    }