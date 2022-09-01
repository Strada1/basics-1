const STATUS = {
  PROGRESS: 'In Progress',
  DONE: 'Done',
  TODO: 'To Do'
}

const list = [ 
  { 
    name: 'write a post', 
    status: STATUS.TODO, 
    priority: 'low'  
  }, 
  { 
    name: 'code reviews', 
    status: STATUS.PROGRESS, 
    priority: 'low'  
  }, 
  
  { 
    name: 'wash the car', 
    status: STATUS.DONE, 
    priority: 'high'  
  },
  { 
    name: 'write a article', 
    status: STATUS.TODO, 
    priority: 'low'  
  }, 
  { 
    name: 'deploy changes', 
    status: STATUS.PROGRESS, 
    priority: 'low'  
  }, 
  
  { 
    name: 'wash the dishes', 
    status: STATUS.DONE, 
    priority: 'high'  
  } 
];

function showList() {

  let todoStr = '';
  for(let item of list) {
    if(item.status == STATUS.TODO) {
      todoStr += `    ${item.name}\n`
    }
  }
  if(todoStr == '') {
    todoStr = '    -';
  }
  console.log(`Todo:\n${todoStr}`);

  let progressStr = '';
  for(let item of list) {
    if(item.status == STATUS.PROGRESS) {
      progressStr += `    ${item.name}\n`
    }
  }
  if(progressStr == '') {
    progressStr = '    -';
  }
  console.log(`In Progress:\n${progressStr}`);


  let doneStr = '';
  for(let item of list) {
    if(item.status == STATUS.DONE) {
      doneStr += `    ${item.name}\n`
    }
  }
  if(doneStr == '') {
    doneStr = '    -';
  }
  console.log(`Done:\n${doneStr}`);

}

function changeStatus(task, status) {
  for(let item of list) {
    if(item.name == task) {
      return item.status = status;
    }
  }
};

function addTask(newTask, status, priority) {
  return list.push({
    name: newTask, 
    status: status, 
    priority: priority  
  })
};

function deleteTask(byTask) {
  for(let item of list) {
    if(item.name == byTask) {
      return list.splice(item, 1);
    }
  }
};

changeStatus('write a post', STATUS.PROGRESS);
addTask('morning exercises', STATUS.TODO, 'low');
deleteTask("code reviews");
showList();
