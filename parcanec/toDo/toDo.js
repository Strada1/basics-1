let toDo = {
    "To wake up": false,
    "Turn off the alarm": false,
    "To wash up": false,
    "To smile": false,
}
function showList() {
    for (key in this) {
        if(typeof(this[key])!=='function') {
            console.log(key +": "+ this[key])
        }
    }
}
function addTask(newTask) {
    this[newTask] = false    
}
function deleteTask(delTask) {
    delete this[delTask]
}
function changeStatus(chStatus) {
    this[chStatus] = !this[chStatus]
}
toDo.showList = showList
toDo.addTask = addTask
toDo.deleteTask = deleteTask
toDo.changeStatus = changeStatus

toDo.addTask("Попрыгать")  
toDo.showList()
console.log("\n Change status 'To wash up' \n")
toDo.changeStatus("To wash up")
toDo.showList()