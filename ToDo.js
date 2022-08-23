// const STATUS_TODO = {
//   TO_DO: 'to do',
//   IN_PROGRESS: 'in progress',
//   DONE: 'done',
// };
// const list = {
//   'read book': STATUS_TODO.TO_DO,
//   'learn JS': STATUS_TODO.IN_PROGRESS,
//   'buy bread': STATUS_TODO.DONE,
// };

// function changeStatus(task, status) {
//   if (task in list && status in STATUS_TODO) {
//     list[task] = STATUS_TODO[status];
//   } else {
//     console.log('Error change  task, status');
//   }
// }
// function addTask(task) {
//   list[task] = STATUS_TODO.TO_DO;
// }
// function deleteTask(task) {
//   if (task in list) {
//     delete list[task];
//   } else {
//     console.log('Error delete');
//   }
// }
// function showList() {
//   let toDo = '';
//   let inProgress = '';
//   let done = '';
//   for (let task in list) {
//     switch (list[task]) {
//       case STATUS_TODO.TO_DO:
//         toDo += ` ${task},\n`;
//         break;
//       case STATUS_TODO.IN_PROGRESS:
//         inProgress += ` ${task},\n`;
//         break;
//       case STATUS_TODO.DONE:
//         done += ` ${task},\n`;
//         break;
//     }
//   }
//   console.log(
//     `To do:\n${toDo || '-\n'}In progress:\n${inProgress || '-\n'}Done:\n${done || '-\n'}`,
//   );
// }

// changeStatus('read book', 'IN_PROGRESS');
// addTask('run');
// deleteTask('');
// showList();

// Need more comments and feedback - TY <3

list = {
  'create a new practice task': 'In Progress',
  'make a bed': 'Done',
  'write a post': 'To Do',
};

// создаем новый объект чтобы добавить новую задачу

let addNewToDo = {};

// доступные статусы
let statuses = Object.values(list);
// доступные задачи
let tasks = Object.keys(list);

//добавляем задачу и статус
function AddTask() {
  key = prompt('Add a task name', 'party');
  this[key] = prompt(
    `Select one of these status: ${statuses}`,
    `To 
Do`,
  );
  addNewToDo[key] = this[key];

  //console.log(addNewToDo);
  for (let key in addNewToDo) {
    //   console.log(key);
    //   console.log(this[key])
  }
}
AddTask();

// добавляем новую задачу к существующему списку
Object.assign(list, addNewToDo);
console.log('========== Добавили новую задачу ===========');
console.log('========== Выводим объект list ===========');
console.log(list);

console.log('========== Меняем статус задачи ===========');

function changeStatus() {
  for (let key in list) {
    list[key] = prompt(`Change status for: ${key} to`, `To Do`);
  }
}
changeStatus();
console.log('========== Выводим обновленные статусы ===========');
console.log(list);

// удаляем ключ
function deleteTask() {
  for (let key in list) {
    if (confirm(`Удаляем задачу: ${key} `)) {
      // Save it!
      delete list[key];
      console.log('Deleted');
    } else {
      // Do nothing!
      console.log('Skip');
    }

    // list[key] = prompt(`Change status: ${tasks}`, `To Do`);
    // delete person.age;
  }
}
deleteTask();
console.log('========== Выводим list после удаления ===========');
console.log(list);

function showList() {
  console.log('To Do:');
  for (let key in list) {
    if (list[key] == 'To Do') {
      console.log(key);
    }
  }

  console.log('Done:');
  for (let key in list) {
    if (list[key] == 'Done') {
      console.log(key);
    }
  }

  console.log('In Progress:');
  for (let key in list) {
    if (list[key] == 'In Progress') {
      console.log(key);
    }
  }
}
console.log('========== Выводим отсортированный list ===========');
showList();
