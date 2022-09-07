const firstArgument = document.querySelector('.form__input--first-argument');
const secondArgument = document.querySelector('.form__input--second-argument');
const operation = document.querySelector('.select');
const buttonResult = document.querySelector('.form__btn');
const result = document.querySelector('.form__result');


buttonResult.addEventListener('click', (evt) => {
    let calc;
    evt.preventDefault();
    switch (operation.value) {
        case '+':
            calc = +firstArgument.value + +secondArgument.value;
            break;
        case '-':
            calc = +firstArgument.value - +secondArgument.value;
            break;
        case '*':
            calc = +firstArgument.value * +secondArgument.value;
            break;
           case '/':
            calc = +firstArgument.value / +secondArgument.value;
            break;
    }
    if(isNaN(calc)) {
        result.textContent = 'Введите числовые данные';
    } else {
        result.textContent = calc;
    }
})
