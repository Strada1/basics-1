const STATUS = {
  TO_DO: 'To Do',
  DONE: 'Done',
  IN_PROGRESS: 'In Progress',
};

const list = {
  'create a new practice task': STATUS.IN_PROGRESS,
  'make a bed': STATUS.DONE,
  'write a post': STATUS.TO_DO,
};

// Меняем статус задачи (меняем значение ключа)
function changeStatus(task, status) {
  // делаем проверку на пустое поле.
  if (list[task] === undefined) {
    console.log('Нет такой задачи.');
  } else {
    list[task] = status;
  }
}
changeStatus('write a post', STATUS.DONE);

// Добавляем новую задачу (добавляем новый ключ)
function addTask(task) {
  if (typeof task === 'string') {
    // Если пустая строка, оно не выводится
    if (task !== '') {
      list[task] = STATUS.TO_DO;
    }
  } else {
    console.log('Вы ввели не верное значение.');
  }
}
addTask('have a walk');

// Удаляем задачу (удаляем ключ)
function deleteTask(task) {
  if (list[task] === undefined) {
    console.log('Такой задачи не существует');
  } else {
    delete list[task];
  }
}
deleteTask('have a walk');

function showList() {
  console.log(`Todo: `);
  for (let key in list) {
    if (list[key] === STATUS.TO_DO) {
      console.log(`\t ${key}`);
    }
  }
  console.log(`In Progress: `);
  for (let key in list) {
    if (list[key] === STATUS.IN_PROGRESS) {
      console.log(`\t ${key}`);
    }
  }
  console.log(`Done: `);
  for (let key in list) {
    if (list[key] === STATUS.DONE) {
      console.log(`\t ${key}`);
    }
  }
}

changeStatus('create a new practice task', STATUS.TO_DO);
changeStatus('make a bed', STATUS.TO_DO);
changeStatus('write a post', STATUS.IN_PROGRESS);
// addTask('cleaning in the apartment');
// changeStatus('cleaning in the apartment', STATUS.DONE);

showList();
