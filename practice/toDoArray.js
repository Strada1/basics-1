const list = []

const DONE = 'done'
const IN_PROGRESS = 'in progress'


function addTask(task, status, priority) {
  return list.push({
    name: task,
    status: status,
    priority: priority
  })
}


addTask('Изучение js', 'done', 'Высокий')
addTask('refactor code', 'in progress', 'height')
addTask('js', 'in progress', 'низкий')


function changeStatus(name, newStatus) {
  for (let i = 0; i <= list.length; i++) {
    if (list[i].name === name)
      return list[i].status = newStatus
  }
}

changeStatus('js', 'in progress')


function deleteTask(taskName) {
  let indexEl = list.indexOf(taskName)
  if (indexEl === -1) {
    list.splice(indexEl, 1)
  }
}

deleteTask('refactor code')


function showList() {
  let resultInProgress = []
  let resultDone = []
  list.forEach((item) => {
    if (item.status === IN_PROGRESS) {
      resultInProgress.push(item.name)
    } else if (item.status === DONE) {
      resultDone.push(item.name)
    } else {
      return 'Поле статус заполнено не правильно'
    }
    console.log(`Выполнение задачи: ${resultDone}  Выполняются: ${resultInProgress}`)
  });
}


showList()
