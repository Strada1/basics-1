const list = [];

function addTask () {
    let taskName = prompt ('task name?');

    if (taskName === null) {
        return console.log('bye bye');
    } else if ((list.findIndex(item => item.name == taskName)) !== -1) {
        return console.log('A task with the same name has already been created');
    }
    
    if (isNaN(taskName) === true) {
        let taskPriority = prompt ('priority? low/medium/high');
        taskPriority = taskPriority.toLowerCase();
        if (taskPriority === 'low' || taskPriority === 'medium'  || taskPriority === 'high') {
            list.push({name: taskName, status: 'To Do', priority: taskPriority})
            return console.log("The task has been created");
        } else {
            console.log(`${taskPriority} - incorrent priority, try again`);
            addTask()
        }
    } else {
        console.log(`${taskName} - incorrent name, try again`);
        addTask()
    }
};

function deleteTask () {
    let taskName = prompt ("task name?")
    let taskIndex = list.findIndex(item => item.name == taskName)

    if (taskIndex === -1) {
        return console.log((`There is no such task "${taskName}"`));
    }

    let confirmDeletion = confirm (
        `Are you sure you want to delete this task? \nTask name: ${list[taskIndex].name} \nTask status: ${list[taskIndex].status} \nTask priority: ${list[taskIndex].priority}`
        )
    
    if (confirmDeletion) {
        list.splice (taskIndex, 1)
        return console.log(`"${taskName}" was deleted`);
    } else {
        return console.log('Task hasn\'t been deleted');
    }
};

function changeStatus () {
    let taskName = prompt ("task name?")
    let taskIndex = list.findIndex(item => item.name == taskName)

    if (taskIndex === -1) {
        let suggestion = confirm (`There is no such task. Want to create a task "${taskName}?"`);
        if (suggestion) {
            addTask()
            return console.log(`"${taskName}" was created`);
        } else {
            return console.log('okay');
        }
    }

    let getStatus = prompt (`Now the task "${taskName}" status is "${list[taskIndex].status}".\nEnter new status: To Do/In progress/Done`);

   
    if (getStatus === list[taskIndex].status) {
        return console.log(`The task status is already set to "${getStatus}"`);
    } else if (getStatus === "To Do" || getStatus === "In progress" || getStatus === "Done") {
        list[taskIndex].status = getStatus;
        return console.log("Task status has been changed");
    } else {
        console.log(`${getStatus} - incorrent status, try again`);
        changeStatus()
    }
};

function showList() {
    let todoTasks = '';
    let inProgressTasks = '';
    let doneTasks = '';

    if (list.length < 1) return console.log('Task list is empty');

    for (let i = 0; i < list.length; i++) {
        if (list[i].status === 'To Do') {
            todoTasks += `\t${list[i].name}\n`
        } else if (list[i].status === 'In progress') {
            inProgressTasks += `\t${list[i].name}\n`
        } else {
            doneTasks += `\t${list[i].name}\n`
        }
    }

    return console.log(`To Do:\n${todoTasks}In progress:\n${inProgressTasks}Done:\n${doneTasks}`);
};
