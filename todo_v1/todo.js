const taskList = {
	"make a bed": "Done", 
    "write a post": "To Do", 
    "Wash Dishes": "To Do",
    "Do homework": "In Progress",
    "Make new practice task": "Done",
}

function changeStatus (key , newStatus) {
    if (taskList[key] != newStatus);
    (taskList[key] = newStatus); 
}

function addTask (newTask) {
    if (newTask in taskList){
        return (taskList[newTask])}
        taskList[newTask] = 'in process'     
}

function deleteTask (deleteName) {
    delete taskList[deleteName];
}

function showList () {

    console.log ('In Progress:')
    
    for (let key in taskList){
        if (taskList[key] == 'In Progress')
        console.log (key)}
       
        
        
    console.log ('Done:')
    for (let key in taskList){
        if (taskList[key] == 'Done')
        console.log (key)}
       
        
        
    console.log ('To Do:')
    for (let key in taskList){
        if (taskList[key] == 'To Do')
        console.log (key)}        
    }

console.log (showList());

console.log(changeStatus (['write a post'], 'Done'));

console.log(addTask ("relaxing"));
console.log (taskList);

console.log (taskList);
console.log(deleteTask("write a post"));
console.log (taskList);

console.log(showList ())