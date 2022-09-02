const STATUS = {
  TO_DO: "To Do",
  PROGRESS: "In progress",
  DONE: "Done",
};

const todoList = {};

function changeStatus(name, status) {
  if (todoList[name]) {
    todoList[name] = status;
  } else {
    console.log("error");
  }
}

function addTask(name) {
  if(name in todoList) {
    console.log("error: task already exists in the list");
  } else if (name === false || name === undefined || name === '') {
    console.log("error: empty field, nothing to add");
  } else {
    todoList[name] = STATUS.TO_DO;
  }
}

function deleteTask(name) {
  if (todoList[name]){
    delete todoList[name];
  } else {
    console.log('nothing to delete');
  }
}

function showList() {
  let progress = "";
  let todo = "";
  let done = "";

  for (let name in todoList) {
    switch(todoList[name]) {
      case STATUS.TO_DO:
        todo += ` ${name},\n`;
        break;
      case STATUS.PROGRESS:
        progress += ` ${name},\n`;
        break;
      case STATUS.DONE:
        done += ` ${name},\n`
        break;    
    }
  }
  
  console.log(`Todo:\n${todo || '-\n'}In progress:\n${progress || '-\n'}Done:\n${done || '-\n'}`);
  }

  addTask('write a post');
  addTask('learn js');
  addTask('do nothing');
  addTask('make a coffie')
  addTask('')
  changeStatus('write a post', STATUS.TO_DO);
  changeStatus('learn js', STATUS.PROGRESS);
  changeStatus('do nothing', STATUS.DONE);
  deleteTask('learn react')

  showList()
  
