const list = [];
const STATUS = {
    todo: 'To-Do',
    inProgress: 'In progress',
    done: 'Done',
}

const PRIORITY = {
    low: 'low',
    medium: 'medium',
    high: 'high',
}

function addTask () {
    let taskName = prompt ('task name?');

    if (taskName === null) {
        return alert('bye bye');
    } else if ((list.findIndex(item => item.name == taskName)) !== -1) {
        return alert('A task with the same name has already been created');
    }
    
    if (isNaN(taskName) === true) {
        let taskPriority = prompt ('priority? low/medium/high');
        taskPriority = taskPriority.toLowerCase();
        if (taskPriority === 'low' || taskPriority === 'medium'  || taskPriority === 'high') {
            list.push({name: taskName, status: STATUS.todo, priority: taskPriority})
            return alert("The task has been created");
        } else {
            alert(`${taskPriority} - incorrent priority, try again`);
            addTask()
        }
    } else {
        alert(`${taskName} - incorrent name, try again`);
        addTask()
    }
};

function deleteTask () {
    let taskName = prompt ("task name?")
    let taskIndex = list.findIndex(item => item.name == taskName)

    if (taskIndex === -1) {
        return alert((`There is no such task "${taskName}"`));
    }

    let confirmDeletion = confirm (
        `Are you sure you want to delete this task? \nTask name: ${list[taskIndex].name} \nTask status: ${list[taskIndex].status} \nTask priority: ${list[taskIndex].priority}`
        )
    
    if (confirmDeletion) {
        list.splice (taskIndex, 1)
        return alert(`"${taskName}" was deleted`);
    } else {
        return alert('Task hasn\'t been deleted');
    }
};

function changeStatus () {
    let taskName = prompt ("task name?")
    let taskIndex = list.findIndex(item => item.name == taskName)

    if (taskIndex === -1) {
        let suggestion = confirm (`There is no such task. Want to create a task "${taskName}?"`);
        if (suggestion) {
            addTask()
            return alert(`"${taskName}" was created`);
        } else {
            return alert('okay');
        }
    }

    let getStatus = prompt (`Now the task "${taskName}" status is "${list[taskIndex].status}".\nEnter new status: To Do/In progress/Done`);

   
    if (getStatus === list[taskIndex].status) {
        return alert(`The task status is already set to "${getStatus}"`);
    } else if (getStatus === STATUS.todo || getStatus === STATUS.inProgress || getStatus === STATUS.done) {
        list[taskIndex].status = getStatus;
        return alert("Task status has been changed");
    } else {
        alert(`${getStatus} - incorrent status, try again`);
        changeStatus()
    }
};

function showList() {
    let todoTasks = '';
    let inProgressTasks = '';
    let doneTasks = '';

    if (list.length < 1) return alert('Task list is empty');

    for (let i = 0; i < list.length; i++) {
        if (list[i].status === STATUS.todo) {
            todoTasks += `\t${list[i].name}\n`
        } else if (list[i].status === STATUS.inProgress) {
            inProgressTasks += `\t${list[i].name}\n`
        } else {
            doneTasks += `\t${list[i].name}\n`
        }
    }

    return console.log(`To Do:\n${todoTasks}In progress:\n${inProgressTasks}Done:\n${doneTasks}`);
};
