const calc = document.querySelector('.calc__row');
const operator = calc.querySelector('.operator-select');
const btn = calc.querySelector('.equal-btn');
const a = calc.querySelector('#a');
const b = calc.querySelector('#b');
const ans = calc.querySelector('.answer');

btn.addEventListener('click', () => {
    let answer = eval(`${a.value} ${operator.value} ${b.value}`);
    // answer = answer.toFixed(2);
    ans.innerHTML = answer;
})