const ErrorList = {
  STATUS_ERROR: 'Ошибка названия статуса',
  PRIORITY_ERROR: 'Ошибка названия приоритета',
  TASK_NAME_ERROR: 'Ошибка названия задачи',
  TASK_EXISTS_ERROR: 'Задача с таким именем уже существует',
  TASK_NOT_FIND_ERROR: 'Задача не найдена'
};

const ALERT_SHOW_TIME = 7000;

// Вывод ошибки
const outputError = (error) => {
  const message = Object.values(ErrorList).includes(error) ? error : 'Неизвестная ошибка';

  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'fixed';
  alertContainer.style.top = '0';
  alertContainer.style.left = '50%';
  alertContainer.style.transform = 'translateX(-50%)';
  alertContainer.style.zIndex = '1000';
  alertContainer.style.minWidth = '500px';
  alertContainer.style.padding = '20px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.fontWeight = '500';
  alertContainer.style.color = '#e04226';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ffeae7';
  alertContainer.style.border = '2px solid #ffc8be';
  alertContainer.style.borderTop = 'none';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export { outputError, ErrorList };
