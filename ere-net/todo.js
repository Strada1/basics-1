// Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль 

const todoList = {};

const statusList = {
  'To Do': 'To Do',
  'In Progress': 'In Progress',
  'Done': 'Done',
}

function changeStatus(task, status) {
  if (status in statusList) {
    this[task] = status;
  } else {
    console.log('Wrong Status');
  }
};

function addTask(task) {
  this[task] = 'To Do';
};

function deleteTask(task) {
  if (task in todoList) {
    delete this[task];
  } else {
    console.log('Wrong Task Name');
  }
};

function showList() {
  let hasTasks = false;

  for (let status in statusList) {
    console.log(`${statusList[status]}:`);
    for (let key in this) {
      if (this[key] == statusList[status]) {
        hasTasks = true;
        console.log(`\t ${key}`);
      };
    };
    if (!hasTasks) {
      console.log('-');
    }
    hasTasks = false;
  }
};

todoList.changeStatus = changeStatus;
todoList.addTask = addTask;
todoList.deleteTask = deleteTask;
todoList.showList = showList;


todoList.addTask('First Task');                        // First Task: To Do
todoList.addTask('Second Task');                       // First Task: To Do; Second Task: To Do
todoList.changeStatus('First Task', 'Done');           // First Task: Done; Second Task: To Do
todoList.changeStatus('Second Task', 'In Progress');   // First Task: Done; Second Task: In Progress
todoList.deleteTask('First Task');                     // Second Task: In Progress
todoList.addTask('Third Task');                        // Second Task: In Progress, Third Task: To Do
todoList.addTask('Forth Task');                        // Second Task: In Progress, Third Task: To Do, Forth Task: To Do
todoList.deleteTask('Third Task');                     // Second Task: In Progress, Forth Task: To Do
todoList.changeStatus('Forth Task', 'Done');           // Second Task: In Progress, Forth Task: Done

todoList.showList();                                   // Second Task: In Progress, Forth Task: Done