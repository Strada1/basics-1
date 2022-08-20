toDoObj = {}

function addTask(task, status) {
  toDoObj[task] = status
}

function deleteTask(task) {
  delete toDoObj[task]
}

function changeStatus(task, statusEdit) {
  toDoObj[task] = statusEdit
}

function showList() {
  let arrWorks = []
  let arrStatus = []
  for (let key in toDoObj) {
    arrWorks.push(key, toDoObj[key])
    arrStatus.push(key, toDoObj.key)
  }
  return console.log(arrStatus, arrWorks)
}


addTask('work', "в работе")
addTask('work2', "в работе")
addTask('work3', "в блоке")

deleteTask('work3')

changeStatus('work2', 'в процессе')

showList()


