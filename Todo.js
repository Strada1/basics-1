const list = {
    "create a new practice task": "To do",
    "make a bed": "Done",
    "write a post": "To do",
    "cook breakfas": "To do",
    "make a cofe": "Done",
}

function cangeStatus (task, status) {
    if (checkTask(task)) {
         if (status == "To do" || status == "Done" || status == "In Progress") {
       list[task] = status;  
    } else {
        console.log(`Вы ввели неправильный статус: ${status}`);
    }
    } else {
        console.log(`${task} - Такой задачи не существует`);
    }
}

function addTask (task) {
    if (checkTask(task)) {
        console.log("Такая задача уже существует");
    } else {
        list[task] = "To do";
    }
    
}

function deleteTask (task) {
    if (checkTask(task)) {
       delete list[task]; 
    } else {
        console.log(`${task} - Такой задачи не существует`);
    }
      
}

function checkTask (task) {
    for (let key in list) {
        if (key == task) {
            return true;
        }
    }
}

function showTasksForStatus (status) {
    let num = 0;
    console.log(status + ":");
    for (let key in list) {
        if (list[key] == status) {
            console.log("\t" + key);
            num ++;
        }
    }
    if (num == 0) {
        console.log("\t" + "-")
    }
    console.log();
}

function showList () {
    showTasksForStatus ("To do");
    showTasksForStatus ("In Progress");
    showTasksForStatus ("Done");
}


cangeStatus("write a post", "Done");
addTask('have a walk');
addTask('have a walk');
deleteTask('have a walk');
deleteTask('have a walk');
showList();
