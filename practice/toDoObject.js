toDoObj = {}

function addTask(task, status) {
  toDoObj[task] = {
    status,
    task
  }
}

function deleteTask(task) {
  delete toDoObj[task]
}

function changeStatus(task, statusEdit) {
  toDoObj[task].status = statusEdit
}

function showList() {
  let arr = []
  for (let key in toDoObj) {
    arr.push(toDoObj[key].task)
  }
  return console.log("Список дел", arr)
}


addTask('work', "в работе")
addTask('work2', "в работе")
addTask('work3', "в блоке")

showList()

deleteTask('work3')

showList()

changeStatus('work', "в блоке")


showList()