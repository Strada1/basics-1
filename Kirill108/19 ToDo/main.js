let ToDo = {};

function changeStatus() {
  //не понял как ее делать :(
}

function addTask() {
  ToDo.task_1 = 'Задача'
  ToDo.task_2 = 'Задача'
}

function deleteTask() {
  delete ToDo.task_1
}

function showList() {
  for (let key in ToDo)
  if (key == true){
    console.log(key)
  }
}


addTask()
console.log(ToDo)

showList()

