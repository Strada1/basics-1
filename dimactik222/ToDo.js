let ToDoList = {

  changeStatus: function(taskName) {
    ToDoList[taskName] = !ToDoList[taskName];
  },

  addTask: function(taskName) {
    ToDoList[taskName] = false; 
  },

  deleteTask: function(taskName) {
    delete ToDoList[taskName];
    
  },

  showList: function() {
    
    for (let key in ToDoList) {
      if(String(ToDoList[key]).includes("function")) {
        
      } else {
      console.log(key + ": " + ToDoList[key]);
      }
    }
  },
  
}

ToDoList.addTask("Buy cheese");
ToDoList.addTask("Buy milk");
ToDoList.addTask("Clean appartment");
ToDoList.deleteTask("Buy milk");
ToDoList.changeStatus("Buy cheese")
ToDoList.showList();
