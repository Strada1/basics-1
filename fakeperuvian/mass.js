const list = [
    { name : 'Create a list', status : "To Do", priority : "Hight"},
]

function addTask(task,priority){
    list.push({name : task, status : "To Do", priority : priority})
}

function changeStatus(task,status){
    list.find(item => item.name === task).status = status;
}

function changePriority(task,priority){
    list.find(item => item.name === task).priority = priority;
}

function showList(){
    console.log("To Do:");
    console.log(list.find(item => item.status === "To Do").name);
}

addTask("1","low");
addTask("af","low");
addTask("asf","low");
changeStatus("1","To Do");
changePriority("1","Pohuy");
showList();