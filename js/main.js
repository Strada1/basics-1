//calc basic
const calc = document.querySelector('.calc__row');
const operator = calc.querySelector('.operator-select');
const btn = calc.querySelector('.equal-btn');
const a = calc.querySelector('#a');
const b = calc.querySelector('#b');
const ans = calc.querySelector('.answer');
//history
const history = document.querySelector('.history')
const historyList = document.querySelector('.history .list');
const historyItems = historyList.querySelectorAll('.list__item');
const historyTitle = document.querySelector('.history .title')

//FUNCTIONS
const historyPusher = (answer) => {
    let historyItem = document.createElement('li');
    historyItem.classList.add('list__item');
    historyItem.innerHTML = answer;
    historyList.append(historyItem);
}

//EVENT LISTENERS
btn.addEventListener('click', () => {
    let answer = eval(`${a.value} ${operator.value} ${b.value}`);
    // answer = answer.toFixed(2);
    ans.innerHTML = answer;
    historyPusher(answer);
})

history.addEventListener('click', (e) => {
    if (e.target.classList.contains('list__item')) e.target.remove();
    if (historyList.hasChildNodes) console.log('a')
})