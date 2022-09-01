const todosList = [
  {
    name: 'create a post',
    status: 'In progress',
    priority: 'low',
  },
  {
    name: 'test',
    status: 'Done',
    priority: 'high',
  },
]

const changeStatus = function (todoText, todoStatus) {
  todosList.name === todoText
    ? todosList.status === todoStatus
    : console.log(`Error`)
}

const addTask = function (todoText, todoStatus, todoPriority) {
  todoText.length > 3 && todoStatus.length > 2 && todoPriority
    ? todosList.push({
        name: todoText,
        status: todoStatus,
        priority: todoPriority,
      })
    : console.log('Error')
}

const deleteTask = function (todoText) {
  todosList.name === todoText
    ? delete todosList[todoText]
    : console.log('Error deleting todo')
}

const showList = function () {
  console.log(`Your todos are...`)
  console.log(
    todosList.map(
      (todo, index) =>
        `${index + 1}: ${todo.name}, status: ${todo.status}, priority: ${
          todo.priority
        }`,
    ),
  )
}

// changeStatus('create a post', 'Done')
// changeStatus('make a bed', 'To Do')

// addTask('learn react', 'In progress', 'high')
// addTask('learn redux', 'To Do')

// deleteTask('learn react')
// deleteTask('learn redux')

showList()
