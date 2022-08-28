
const STATUS = {
    TODO: 'To Do',
    DONE: 'Done',
    INPROGRESS: 'In Progress',
}
const LIST = [
    {name:'create a new practice task', status: STATUS.INPROGRESS},
    {name:'make a bed', status: STATUS.TODO},
    {name:'write a post', status: STATUS.DONE},
]

function addTask(name, status = STATUS.TODO) {
    let addTASK = {name, status}
    LIST.push(addTASK)
}

function delTask(name) {
    let position = LIST.findIndex(item => item.name == name)
    LIST.splice(position, 1)
}

function changeStatus(name, status) {
    let position = LIST.findIndex(item => item.name == name)
    if (position >=0 && Object.values(STATUS).includes(status)) {
        LIST[position].status = status
    } else {
        console.log(`No such task as - ${name} `)
    }
} 

function showList() {  
    for (let status in STATUS) {
        console.log(STATUS[status])
    		const listFiter = LIST.filter(item => item.status == STATUS[status])
				listFiter.map(item => console.log( `\t ${item.name}`))
    }
}

changeStatus('make a bed', STATUS.DONE)
changeStatus('write a post', 'To Do');
addTask("добавить задачу1")
addTask("добавить задачу2")
delTask("добавить задачу2")
addTask("добавить задачу3", STATUS.INPROGRESS)
changeStatus('make bed', STATUS.DONE)
showList()
// update for visible PR
//