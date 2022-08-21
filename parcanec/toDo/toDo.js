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
function changeStatus (task, status) {
    if (task && status in LIST) {
        LIST[task] = status
    } else {
        console.log(`Необходимо заполнить нужные поля`)
    }
}
function showList () {
  for (let status in STATUS) {
    console.log(STATUS[status])
    	for (let task in LIST){
            if (LIST[task] === STATUS[status])
            console.log(`\t ${task}`)
        }
    }
}
showList ()