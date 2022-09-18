export function addTask(todo, form, type, status) {
  try {
    if (form[0].value) {
      let text = form[0].value
      todo.push({
        text: text,
        status: status,
        type: type,
      })
    } else {
      throw new Error('Нельзя добавлять пустые задачи')
    }
  } catch(error) {
    alert(error.message)
  }
}