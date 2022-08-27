let list = [ { name: 'create a post', status: 'In progress', priority: 'low', id: 1  }, { name: 'test', status: 'Done', priority: 'high', id: 2  } ] 

const changeStatus = (taskId, status) => {
  list = list.map(task => task.id === taskId ? {...task, status: status} : task)
}

const addTask = (task) => {
  list.push({name: task, status: 'To Do', priority: 'low', id: task})
}

const deleteTask = (taskId) => {
  const isTask = list.find(task => task.id === taskId);
  if(!isTask) {
    return console.log('No such task');
  }
  list = list.filter(task => task.id !== taskId)
}

console.log(list);
changeStatus(1, "Done");
console.log(list);
addTask("kill him");
console.log(list);
deleteTask("kill him");
console.log(list);

