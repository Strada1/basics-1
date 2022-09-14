const highTodoInput = document.querySelector('.high-todo');
const lowTodoInput = document.querySelector('.low-todo');

const highTodoList = document.querySelector('.high-todo-list');
const lowTodoList = document.querySelector('.low-todo-list');


let todoList = [
   { name: 'Сверстать TODO list', status: 'In progress', priority: 'high', id: 1  },
   { name: 'Начать делать задачу', status: 'Done', priority: 'high', id: 2  },
   { name: 'Посмотреть ютубчик', status: 'Done', priority: 'low', id: 3  },
]

const render = () => {
  todoList.forEach((item) => {
    const {name, status, priority, id} = item;

    const removeButton = document.createElement('button');
    removeButton.addEventListener('click', () => deleteTask(id));
    removeButton.textContent = 'X';

    if (priority === 'high') {
      const task = document.createElement('div');

      task.classList.add('todo');

      if (status === 'Done') task.classList.add('done');

      task.setAttribute('data-id', id);
      task.textContent = name;
      task.addEventListener('click', () => {
        changeTodoStatus(id);
      })

      highTodoList.appendChild(task);
      task.appendChild(removeButton);
    }
    if (priority === 'low') {
      const task = document.createElement('div');

      task.classList.add('todo');

      if (status === 'Done') task.classList.add('done');

      task.setAttribute('data-id', id);
      task.textContent = name;
      task.addEventListener('click', () => {
        changeTodoStatus(id);
      })

      lowTodoList.appendChild(task);
      task.appendChild(removeButton);
    }
  })
}

const removeTodos = () => {
  const deleteElement = document.querySelectorAll('.todo');
  deleteElement.forEach(item => item.remove());
}

render();

const addHighTask = highTodoInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    const newTask = { name: event.target.value, status: 'In progress', priority: 'high', id: todoList.length + 1 }
    todoList.push(newTask);
    removeTodos();
    render();
  }
})

const addLowTask = lowTodoInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    const newTask = { name: event.target.value, status: 'In progress', priority: 'low', id: todoList.length + 1 }
    todoList.push(newTask);
    removeTodos();
    render();
  }
})

function changeTodoStatus(id) {
  todoList = todoList.map(item => {
    return item.id !== id ? item : {...item, status: item.status == 'In progress' ? 'Done' : 'In progress' };
  })
  console.log(todoList)
    removeTodos();
    render();
}




function deleteTask(taskId) {
  todoList = todoList.filter(({id}) => id !== taskId);
  removeTodos();
  render();
}


