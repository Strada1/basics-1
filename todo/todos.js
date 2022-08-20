const todosList = {
  // list of todos here
  'create a new practice task': 'In Progress',
  'make a bed': 'Done',
  'write a post': 'To Do',
}

const changeStatus = function (todoText, todoStatus) {
  todosList[todoText] = todoStatus
  console.log(`You've successfully changed the status of your todo`)
}

const addTask = function (todoText, todoStatus) {
  todosList[todoText] = todoStatus
  console.log(`Success! You've successfully added a new todo`)
}

const deleteTask = function (todoText) {
  delete todosList[todoText]
  console.log(`Success! You've successfully deleted todo`)
}

const showList = function () {
  console.log(`Your todos are...`)
  console.log(todosList)
}

changeStatus('write a post', 'Done')
changeStatus('make a bed', 'To Do')

addTask('learn react', 'To Do')
addTask('learn redux', 'To Do')

deleteTask('create a new practice task')
deleteTask('learn redux')

showList()
