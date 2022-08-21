const list = {
  'create a new practice task': 'In Progress',
  'make a bed': 'Done',
  'write a post': 'To Do',
};

///////////////////////////////////////////////////////////
// Меняем статус задачи (меняем значение ключа)
function changeStatus(task, status) {
  list[task] = status;
}
changeStatus('write a post', 'Done');
// console.log(list);

///////////////////////////////////////////////////////////
// Добавляем новую задачу (добавляем новый ключ)
function addTask(task) {
  list[task] = 'To Do';
}
addTask('have a walk');
// console.log(list);

///////////////////////////////////////////////////////////
// Удаляем задачу (удаляем ключ)
function deleteTask(task) {
  delete list[task];
}

deleteTask('have a walk');
// console.log(list);

////////////////////////////////////////////////////////////
function showList() {
  console.log(`Todo: `);
  for (let key in list) {
    if (list[key] === 'To Do') {
      console.log(` \t ${key}`);
    }
  }
  console.log(`In Progress: `);
  for (let key in list) {
    if (list[key] === 'In Progress') {
      console.log(` \t ${key}`);
    }
  }
  console.log(`Done: `);
  for (let key in list) {
    if (list[key] === 'Done') {
      console.log(` \t ${key}`);
    }
  }
}

changeStatus('create a new practice task', 'To Do');
changeStatus('make a bed', 'To Do');
changeStatus('write a post', 'In Progress');
addTask('cleaning in the apartment');
changeStatus('cleaning in the apartment', 'Done');

// console.log(list);
showList();
