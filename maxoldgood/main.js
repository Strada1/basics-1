const addTaskHigh = document.getElementById("add-high-task-form");
const addTaskLow = document.getElementById("add-low-task-form")
const highPriorityBlock = document.querySelector (".task-block.priority-high");
const lowPriorityBlock = document.querySelector(".task-block.priority-low")
const inputHighTask = document.getElementById("add-high-task-input");
const inputLowTask = document.getElementById("add-low-task-input");
const deleteButton = document.querySelector(".delete-task-button");
const checkBox = document.querySelector(".complete-task-button");

addTaskHigh.addEventListener("submit", addTaskFunctionHigh);
addTaskLow.addEventListener("submit", addTaskFunctionLow);


    const list = [];

    let toDo = "To Do";
    let inProgress = "In Progress";
    let done = "Done";
    
    let lowPriority = "low";
    let highPriority = "high";


    function addTaskFunctionHigh() {
        event.preventDefault();
        
        let addedTask = {} 
        addedTask.name = inputHighTask.value;
        addedTask.priority = highPriority;
        addedTask.status = toDo;
        list.push(addedTask); 
        inputHighTask.value="";
        render();    
    }

    function addTaskFunctionLow() {
        event.preventDefault();
        let addedTask = {} 
        addedTask.name = inputLowTask.value;
        addedTask.priority = "low";
        addedTask.status = toDo;
        list.push(addedTask);
        inputLowTask.value="";
        render()
         
    }
    
    function deleteTask() {
        let deleteButton = event.currentTarget;
        let taskToDeleteName = deleteButton.previousElementSibling.innerHTML;
        let taskToDeleteIndex = list.findIndex (item => item.name === taskToDeleteName);
        list.splice(taskToDeleteIndex,1);
        render();
    }
    
    function changeStatus (){
        let checkButton = event.currentTarget;
        let taskName = checkButton.nextElementSibling.innerHTML;
        let taskComplete = list.find(item =>item.name === taskName);
       if (checkButton.checked) {
        taskComplete.status = done;
       } else taskComplete.status = toDo;
    }
    

    function render() {
        let allTasks = document.querySelectorAll(".task");
        for (let tasks of allTasks) {
            tasks.remove();
        }
        for (let tasks of list) {
            if (tasks.priority === highPriority){
                let isDone = (tasks.status === done) ? `checked` : "";
                highPriorityBlock.insertAdjacentHTML("beforeend", `
                <div class="task">
                    <input class="complete-task-button" type="checkbox" ${isDone} onclick="changeStatus()">
                    <div class="task-name">${tasks.name}</div>
                    <input class="delete-task-button" onclick="deleteTask()" type="image" src="./img/close-icon.svg">
                </div>`);
            }
            else if (tasks.priority === lowPriority) {
                let isDone = (tasks.status === done) ? "checked" : "";
                lowPriorityBlock.insertAdjacentHTML("beforeend", `
                <div class="task">
                    <input class="complete-task-button" type="checkbox" ${isDone} onclick ="changeStatus()">
                    <div class="task-name">${tasks.name}</div>
                    <input class="delete-task-button" onclick="deleteTask()" type="image" src="./img/close-icon.svg">
                </div>`);
            }
        }
    }