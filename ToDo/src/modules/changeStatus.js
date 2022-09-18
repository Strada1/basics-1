export function changeStatus(todo, task, str) {
  try {
    if (str === 'onChecked') {
      task.classList.value = 'task done'
      todo[task.id].status = 'checked'
    } else if (str === 'onCheck') {
      task.classList.value = 'task'
      todo[task.id].status = 'check'
    } else {
      throw new Error('Не удалось изменить статус задачи')
    }
  } catch (error) {
    alert(error.message)
  }
}