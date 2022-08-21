let list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
    "write a post1": "To Do",
}

const changeStatus = (task, status) => {
  list = {...list, [task]: status};
}

const addTask = (task) => {
  list = {...list, [task]: "To Do"};
}

const deleteTask = (task) => {
  if (task in list) {
   return delete list[task];
  }
  console.log('No such task');
}

const showList = () => {
  const result = {
    "To Do": [],
    "In Progress": [],
    "Done": [],
  }

  const arr = Object.keys(list);

  arr.forEach(item => {
    switch (list[item]) {
      case 'To Do':
        return result['To Do'].push(item);

      case 'In Progress':
        return result['In Progress'].push(item);

      case 'Done':
        return result['Done'].push(item);
    
      default:
        break;
    }
  })

  console.log(`To Do: ${result['To Do']}`);
  console.log(`In Progress: ${result['In Progress']}`);
  console.log(`Done: ${result['Done']}`);
}

changeStatus("write a post", "Done");
addTask("kill him");
deleteTask("make a bed");
showList();