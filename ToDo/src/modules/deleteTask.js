export function deleteTask(todo, task) {
  try {
    todo.splice(Number(task.id), 1)
  } catch (error) {
    alert(error.message)
  }
}