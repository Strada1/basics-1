

let list = []

let checkForTask = function(task){
    for(let key in list){
        if(list[key].task == task){return true} // Проверка на наличие такого таска в листе
    }
}

let addTask = function(task, status = "ToDo", priority = "high"){
    {
        if(checkForTask(task)){return} 
    }
    list.push(task = {task : task,
    status: status,
    priority: priority})
}

let changeStatus = function(task, newstatus){
    for(let key in list){
    if(list[key].task == task){list[key].status = newstatus}
    }
}

let delTask = function(task){
    for(let key in list){
        if(list[key].task == task){list.splice(key,1)}
    }
}

let showList = function(){
    console.log("ToDo:")
    for(let i in list){
        if(list[i].status == 'ToDo'){console.log("   ",list[i])}
    }
    console.log("InProgress:")
    for(let i in list){
        if(list[i].status == 'InProgress'){console.log("   ",list[i])}
    }
    console.log("Done:")
    for(let i in list){
        if(list[i].status == 'Done'){console.log("   ",list[i])}
    }
    console.log("Other")
        for(let i in list){
            if(list[i].status != 'ToDo' && list[i].status != 'InProgress' && list[i].status != 'Done'){console.log("   ",list[i])}
    }
}

addTask("Eat", "Done")
addTask("Walk")
addTask("Dance","ToDo","Low")
addTask("Sleep","InProgress","High")
addTask("Work","DontWantTo")
changeStatus("Sleep","Done")
delTask("Eat")
showList()

