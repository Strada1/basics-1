const ToDoList = {
    createNewTask(taskName, taskStatus = "ToDo"){
        taskName = taskName, taskStatus = taskStatus;
        ToDoList[taskName] = taskStatus
    },
    changeStatus(taskName, newStatus){
        if(taskName in ToDoList){
            ToDoList[taskName] = newStatus
            }else return("Такого таска нет.")
    },
    deleteTask(taskName){
        if(taskName in ToDoList){
            delete ToDoList[taskName]
        }else return("Такого таска нет")
    },
    showList(){console.log("ToDo:")
    for(let i in ToDoList)
    {
        if(typeof(ToDoList[i]) == "string" && ToDoList[i] == "ToDo"){console.log("     ",i)}
    }
    console.log("InProgress:")
    for(let i in ToDoList)
    {
        if(typeof(ToDoList[i]) == "string" && ToDoList[i] == "InProgress"){console.log("     ",i)}
    }
    console.log("Done:")
    for(let i in ToDoList)
    {
        if(typeof(ToDoList[i]) == "string" && ToDoList[i] == "Done"){console.log("     ",i)}
    }
    console.log("Other:")
    for(let i in ToDoList)
    {
        if(typeof(ToDoList[i]) == "string" && ToDoList[i] != "Done" && ToDoList[i] != "InProgress" && ToDoList[i != "ToDo"]){console.log("     ",i)}
    }
    }
}
