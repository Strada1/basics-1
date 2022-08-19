const list = {
    "create a ToDo programm" : "To Do",
    "test11" : "To Do",
    "test22" : "To Do"
}

function addTask(task) {
    list[task] = "ToDo";
}

function deleteTask(task){
    delete list[task]
}

function changeStatus(task,status){
    list[task] = status
}

function showList() {
    console.log("TO DO:");
    for(let key in list){
        if (list[key] == "To Do") {
        console.log(key);
        }
    }
    console.log("In Progress:");
    for(let key in list){
        if (list[key] == "In Progress") {
        console.log(key);
        }
    }
    console.log("Done");
    for(let key in list){
        if (list[key] == "Done") {
        console.log(key);
        }
    }

}

addTask("test");
addTask("test2");
console.log(list)
deleteTask("test2");
changeStatus("test","Done");
changeStatus("test11","In Progress");
console.log(list)
showList();