const STATUS = {
    TODO: "To Do",
    DONE: "Done",
    INPROGRESS: "In Progress",
}
const LIST = {
	"create a new practice task": STATUS.INPROGRESS,
	"make a bed": STATUS.TODO,
	"write a post": STATUS.DONE,
}

function addTask (newTask, status=STATUS.TODO) {
    LIST[newTask] = status
}
  
function deleteTask (task) {
    if (task in LIST) {
        delete LIST[task]
    } else {
        console.log(`No task with name - ${task}`)
    }
}
function changeStatus(task, status) {
    if (task && Object.values(STATUS).includes(status)) {
      LIST[task] = status;
    } else {
      console.log(`Необходимо заполнить нужные поля`);
    }
  }  
  function showList() {
    console.log('---------')
    for (let status in STATUS) {
      console.log(STATUS[status]);
      for (let task in LIST) {
        if (LIST[task] === STATUS[status]){
           console.log(`\t ${task}`);     
        }
      }
    }
  }
  
  changeStatus('write a post', 'To Do');
  addTask("добавить задачу1")
  addTask("добавить задачу2")
  addTask("добавить задачу3", STATUS.DONE)
  showList()
  deleteTask("добавить задачу2")
  changeStatus('make a bed', STATUS.DONE)
  showList()