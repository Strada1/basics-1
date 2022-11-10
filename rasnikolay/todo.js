const TO_DO = {
    TODO: "To Do",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
}

const tasks = {
    'Заправить кровать': TO_DO.TODO,
    'Поработать': TO_DO.DONE,
    'Позаниматься учебой': TO_DO.IN_PROGRESS,
    'Сходить в зал': TO_DO.TODO,
};

function showList() {
    console.log(TO_DO.DONE + ": ")
    for (let key in tasks) {
        if (tasks[key] === TO_DO.DONE)
            console.log(key + " - " + tasks[key])
    }
    console.log("\n" + TO_DO.IN_PROGRESS + ": ")
    for (let key in tasks) {
        if (tasks[key] == TO_DO.IN_PROGRESS)
            console.log(key + " - " + tasks[key])
    }
    console.log("\n" + TO_DO.TODO + ": ")
    for (let key in tasks) {
        if (tasks[key] == TO_DO.TODO)
            console.log(key + " - " + tasks[key])
    }
}

function addTask(task) {
    tasks[task] = TO_DO.IN_PROGRESS;
}

function deleteTask(task) {
    if (task in tasks) {
        delete tasks[task];
    }
}

function changeStatus(task, status) {
    if (task in tasks) {
        tasks[task] = status;
    }
}
console.clear();

addTask('Сделать уборку');
deleteTask('Сходить в зал');
changeStatus('Заправить кровать', TO_DO.TODO);
showList();
