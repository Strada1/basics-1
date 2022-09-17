const TODO = [];

const STATUS = {
    TO_DO: "To Do",
    DONE: "Done",
}

const PRIORITY = {
    HIGH: "high",
    LOW: "low",
}

function addTask(input, father){
    const taskElement = document.getElementById(input);
    let taskText = taskElement.value;
    let container = document.getElementById(father);
    
    //add task to array
    let task = {};
    task.name = taskText;
    task.status = STATUS.TO_DO;
    task.priority = father;
    TODO.push(task);

    render();
}

function changeStatus(task) {  
    if (task.status == STATUS.TO_DO) {
        task.status = STATUS.DONE;
        return;
    }
    if (task.status == STATUS.DONE){
        task.status = STATUS.TO_DO;
        return;
    } 

    render();
}

function deleteTask(task) {
    TODO.splice(TODO.indexOf(task), 1);

    render();
}

function removeAllTasks(){
    let allTasks = document.getElementsByClassName('task');
    for (let i=allTasks.length-1; i>=0; i--) {
        allTasks[i].remove();
    }
}

function showTasks(){ //create DOM structure from the TODO
    let taskPattern = document.getElementById("pattern");
    for (let task of TODO) {
        //create new task div in HTML
        let newdiv = taskPattern.cloneNode(true); //make a clone of hidden Task task
        newdiv.className = "task";
        newdiv.removeAttribute('Style'); //remove style="display:none in new div

        //create checkbox(checked) if task.status is done
        let checkboxElem = newdiv.childNodes[1];
        checkboxElem.onclick = () => changeStatus(task);
        if (task.status == STATUS.TO_DO) {
            checkboxElem.checked = false;
        }
        if (task.status == STATUS.DONE) {
            checkboxElem.checked = true;
        }

        //create div with task text
        newdiv.childNodes[3].innerHTML = task.name;

        //create cross icon to remove the task
        let closeElem = newdiv.childNodes[5]; //find task with Cross Icon
        closeElem.onclick = () => deleteTask(task);
        //newdiv.remove();
        
        //choose container where to put new div
        let container;
        if (task.priority==PRIORITY.LOW){
        container = document.getElementById('low');
        }
        if (task.priority==PRIORITY.HIGH){
        container = document.getElementById('high');
        }
        container.appendChild(newdiv);
    }
}

function render(){
    removeAllTasks();
    showTasks();
}

