const list = [
    { name: 'create a post', status: 'In progress', priority: 'low'  },
    { name: 'test', status: 'Done', priority: 'high'  },]


const STATUS = {
    DONE: 'done',
    NOT_DONE: 'not done',
    IN_PROGRESS: 'in progress'
}

const PRIORITY = {
    LOW: 'low',
    HIGH: 'high'
}
console.log(list)


function addTask(newTask,statusTask,priorityTask) {
    list.push({
        name: newTask,
        status: STATUS.DONE,
        priority: priorityTask
    })

}
addTask('cleaning','','high')
console.log(list)


function deleteTask(nameTask) {
    let deleteTask = list.findIndex(item => item.name === nameTask)
    list.splice(deleteTask,1)
}

deleteTask('test')
console.log(list)


function changeStatus(nameTask, newStatus) {
    let findStatus = list.find(item => item.name === nameTask)
    findStatus.status = newStatus

}
changeStatus('cleaning','in progress')
console.log(list)

function changePriority (nameTask, priority) {
    let priorityTask = list.find(item => item.name === nameTask)
    priorityTask.priority = priority
}
changePriority('create a post','normal')
console.log(list)

function showList () {
    console.log('DONE')
    list.map((item) =>{
        if(item.status === STATUS.DONE) {
            console.log(item)
        }
    })

    console.log('IN_PROGRESS')
    list.map((item) => {
        if (item.status === STATUS.IN_PROGRESS) {
            console.log(item)
        }
    })

    console.log('NOT_DONE')
    list.map((item)=> {
        if(item.status === STATUS.NOT_DONE) {
            console.log(item)
        }
    })

}
showList()


