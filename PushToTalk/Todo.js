const list = [
  {
    name: 'create a post', 
    status: 'In progress', 
    priority: 'low',
  },
  {
    name: 'test', 
    status: 'Done', 
    priority: 'medium',
  },
  {
    name: 'write a book', 
    status: 'To Do', 
    priority: 'high',
  },
  {
    name: 'buy a car', 
    status: 'In progress', 
    priority: 'low',
  },
  {
    name: 'gift for friend', 
    status: 'Done', 
    priority: 'high',
  },
  {
    name: 'birthday',  
    status: 'To Do', 
    priority: 'medium',
  },
]

function changeStatus(name, status, priority) {
  if (typeof name !== 'string') {
    throw new Error(`${name} is not a string`);
  } else if (typeof status !== 'string') {
    throw new Error(`${status} is not a string`);
  } else if (typeof priority !== 'string') {
    throw new Error(`${priority} is not a string`);
  } else {
    let index = list.findIndex(post => post.name === name)
    list[index] = {
      name: name,
      status: status,
      priority: priority
    }
  }
}

function addTask(name, status, priority) {
  if (typeof name !== 'string') {
    throw new Error(`${name} is not a string`);
  } else if (typeof status !== 'string') {
    throw new Error(`${status} is not a string`);
  } else if (typeof priority !== 'string') {
    throw new Error(`${priority} is not a string`);
  } else {
    list.push({
      name: name,
      status: status,
      priority: priority,
    })
  }
}

function deleteTask(name) {
  if (typeof name !== 'string') {
    throw new Error(`${name} is not a string`);
  } else {
    let post = list.findIndex(post => post.name === name);
    list.splice(post, 1)
  }
}

function showList() {
  const toDo = list.filter(post => post.status.includes('To Do'))
  const inProgress = list.filter(post => post.status.includes('In progress'))
  const done = list.filter(post => post.status.includes('Done'))

  let toDoStr = 'To Do:\n'
  let inProgressStr = 'In progress:\n'
  let doneStr = 'Done:\n'

  if (!toDo.length) {
    doneStr += '   ' + '-'
  }
  if (!inProgress.length) {
    doneStr += '   ' + '-'
  } 
  if (!done.length) {
    doneStr += '   ' + '-'
  } 

  toDo.forEach((post, index) => {
    if (index === toDo.length - 1) {
      toDoStr += ` ${post.priority.toUpperCase().slice(0, 1)} ` + post.name
    } else {
      toDoStr += ` ${post.priority.toUpperCase().slice(0, 1)} ` + post.name + ',' + '\n'
    }
  })

  inProgress.forEach((post, index) => {
    if (index === inProgress.length - 1) {
      inProgressStr += ` ${post.priority.toUpperCase().slice(0, 1)} ` + post.name
    } else {
      inProgressStr += ` ${post.priority.toUpperCase().slice(0, 1)} ` + post.name + ',' + '\n'
    }
  })

  done.forEach((post, index) => {
    if (index === done.length - 1) {
      doneStr += `   ` + post.name
    } else {
      doneStr += `   ` + post.name + ',' + '\n'
    }
  })

  console.log(toDoStr)
  console.log(inProgressStr)
  console.log(doneStr)
}

changeStatus('create a post', 'To Do', 'medium')
changeStatus('gift for friend', 'In progress', 'high')
changeStatus('buy a car', 'Done', 'low')
deleteTask('test')
addTask('watch YouTube video', 'To Do', 'low')
showList()
