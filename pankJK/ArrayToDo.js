const list = [
    { name: "create a post", status: "In progress", priority: "low" },
    { name: "test", status: "Done", priority: "high" },
    { name: "go to walk", status: "Done", priority: "low" },
    { name: "cook dinner", status: "To do", priority: "high" },
    { name: "write a post", status: "to do", priority: "high" },
  ];
  
  
  
  function addTask(newTask, newStatus, newPriority){
    let task = {
      name: newTask,
      status: newStatus,
      priority: newPriority,
    }
    list.push(task)
  }
  
  function changeStatus(nameTask, newStatus, newPriority) {
    list.forEach((El) => {
      if (El.name == nameTask) {
        El.status = newStatus;
        El.priority = newPriority;
      }
    });
  }
  
  function deleteTask(nameTask){
    index = list.findIndex( el => el.name == nameTask)
    list.splice(index, 1)
  }
  
  function findTask(nameTask){
  console.log(list.find( el => el.name == nameTask))
  }
  
  function showList() {
   console.log(list);
  }
   
  
  addTask("wash clothes", 'Done', 'low');
  
  changeStatus("cook dinner", "In progress", "low");
  
  deleteTask("go to walk");
  
  findTask("test")
  
  showList();