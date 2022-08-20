const list = {
    "learn js": "in progress",
    "gym": "done",
    "cook dinner": "not done"
}

function addTask(newTask,status) {
   if(list[newTask] = status){
       return newTask
   } else {
       console.log('Задача не добавлена')
   }

}
console.log(addTask('listen music','done'))
console.log(addTask('wash','not done'))
console.log(list)

function deleteTask (nameTask) {
    if (!list[nameTask]) {
       console.log('Такой задачи не существует')
    } else {
       return delete list[nameTask]
    }
}
console.log(deleteTask("gym"))
console.log(list)

function changeStatus (nameTask, newStatus) {
    return list[nameTask] = newStatus
}

console.log(changeStatus('gym','in progress'))
console.log(list)

function showList () {
    for (let key in list) {
        console.log(key)
        }
}

showList()



