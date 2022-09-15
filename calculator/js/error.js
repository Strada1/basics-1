const Error = {
  OPERAND_ERROR: 'Ошибка: неверный формат введённого значения.',
  OPERATOR_ERROR: 'Ошибка: неизвестная операция.',
  ZERO_DIVIDING_ERROR: 'Ошибка: деление на ноль.'
};

const ALERT_SHOW_TIME = 5000;


const showError = (errorText) => {
  const errorFieldElement = document.querySelector('.error-field');
  errorFieldElement.textContent = errorText;
  errorFieldElement.classList.remove('error-field--hidden');

  setTimeout(() => {
    errorFieldElement.classList.add('error-field--hidden');
  }, ALERT_SHOW_TIME);
};

export { showError, Error };
