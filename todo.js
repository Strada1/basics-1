const STATUS = {
  PROGRESS: 'In Progress',
  DONE: 'Done',
  TODO: 'To Do'
}

const list = {
	"create a new practice task": STATUS.PROGRESS,
	"make a bed": STATUS.DONE,
	"write a post": STATUS.TODO,
};

function changeStatus(task, status) {
  list[task] = status;
};


function addTask(newTask, status) {
  list[newTask] = status;
};

function deleteTask(byTask) {
  delete list[byTask];
};

function showList() {

  let todoStr = '';
  for(let key in list) {
    if(list[key] === STATUS.TODO) { 
      todoStr += `${key}\n`;
    } 
  }
  if(todoStr == '') {
    todoStr = '    -';
  };
  console.log(`Todo:\n    ${todoStr}`);

  let progressStr = '';
  for(let key in list) {
    if(list[key] == STATUS.PROGRESS) {
      progressStr += `${key}\n`;
    } 
  }
  if(progressStr == '') {
    progressStr = '    -';
  };
  console.log(`In Progress:\n    ${progressStr}`);

  let doneStr = '';
  for(let key in list) {
    if(list[key] == STATUS.DONE) {
      doneStr += `${key}\n`;
    } 
  }
  if(doneStr == '') {
    doneStr = '    -';
  };
  console.log(`Done:\n    ${doneStr}`);

};

addTask('write a post', STATUS.PROGRESS);
changeStatus('create a new practice task', STATUS.TODO);
deleteTask("make a bed");
changeStatus('    make a bad', STATUS.TODO);
showList();

