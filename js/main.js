//if the task is done -> true, not done -> false;)

const list = [
    { name: 'create a post', status: 'In progress', priority: 'low'  },
    { name: 'test', status: 'Done', priority: 'high'  }
] 

//add task
const addTask = (arr, name, status = 'Pending', priority = 'low') => {
    const obj = {};
    obj.name = name;
    obj.status = status;
    obj.priority = priority;
    arr.push(obj);
    console.log(`>> Task '${name}' with status '${status}' and priority '${priority}' has been added!`)
}
//change status
const changeStatus = (arr, name, status = 'Done') => {
    let target = arr.find((item) => item.name == name);
    if (target != null) {
        console.log(`>> Task '${name}' now has status '${status}'!`)
        target.status = status;
    } else console.log('No task with such name!')
}
//delete task
const deleteTask = (arr, name) => {
    let targetIndex = arr.findIndex((item) => item.name == name);
    arr.splice(targetIndex,1);
    console.log(`>> Task '${name}' has been deleted!`)
}
//showList
const showList = (arr) => {
    console.log('\n--- YOUR TASKS ---')
    console.log(arr)
    console.log('\n')
}
//tests