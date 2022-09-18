export function id(todo) {
  for (let i = 0; i < todo.length; i++) {
    todo[i].id = i
  }
}