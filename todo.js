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
  return list[task] = status;
};

function addTask(newTask) {
  return list[newTask] = STATUS.PROGRESS;
};

function deleteTask(byTask) {
  return delete list[byTask];
};

function showList() {

  let todoStr = '';
  for(let key in list) {
    if(list[key] === STATUS.TODO) {
      todoStr += key;
    } else if(todoStr === '') {
        console.log('-');
      };
  }
  console.log(`Todo:\n    ${todoStr}`);

  let progressStr = '';
  for(let key in list) {
    if(list[key] == STATUS.PROGRESS) {
      progressStr += key;
    } else if(progressStr === '') {
      console.log('-');
      }
  }
  console.log(`In Progress:\n    ${progressStr}`);

  let doneStr = '';
  for(let key in list) {
    if(list[key] == 'Done') {
      doneStr += key;
    } else if(doneStr == '') {
      console.log('-');
      };
  }
  console.log(`Done:\n    ${doneStr}`);

};

addTask('have a walk');
addTask('wash the dishes');

changeStatus('have a walk', 'Done');
changeStatus('wash the dishes', 'In Progress');

deleteTask('have a walk');

showList();

