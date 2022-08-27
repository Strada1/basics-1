const list = [];

let toDo = "To Do";
let inProgress = "In Progress";
let done = "Done";

let lowPriority = "low";
let highPriority = "high";
let mediumPriority = "medium";

function addTask (newTask, taskStatus, taskPriority) {
    let addedTask = {} // Новая задача будет объектом, содержащим три свойства
    addedTask.name = newTask;
    addedTask.status = taskStatus;
    addedTask.priority = taskPriority;
    list.push(addedTask); // Добавляем созданный объект в качестве элемента в конец массива
}

function changeStatus (task, newStatus) {
    let taskToFind = list.find(item => item.name === task); // 1. Найти позицию объекта (элемента массива), в котором свойство name = искомая task
    taskToFind.status = newStatus; // 2. Поменять у найденного объекта свойство status на newStatus
}

function changePrior(task, newPriority) {
    let taskToFind = list.find (item => item.name === task); 
    taskToFind.priority = newPriority; 
}

function deleteTask(task) {
    let taskToDelete = list.findIndex (item => item.name === task); // Чтобы удалить таск через splice, нам нужен не сам объект, а его индекс в массиве
    list.splice(taskToDelete,1);
}


// 1. Найти все таски со свойством Status="toDo"
// 2. Получили массив, состоящий только из элементов, где статус toDo
// 3. Вывести свойство name каждого элемента массива
// 4. Повторить для остальных статусов

function showlist() {
    console.log (`\n${toDo}:`)
        let tasksToDo = list.filter (item => item.status === toDo);
            for (let tasks of tasksToDo) {
                console.log (`  ${tasks.name}`);
            }
    console.log (`\n${inProgress}:`)
        let tasksInProgress = list.filter (item => item.status === inProgress);
             for (let tasks of tasksInProgress) {
                console.log (`  ${tasks.name}`);
            }
    console.log (`\n${done}:`)
        let tasksDone = list.filter (item => item.status === done);
             for (let tasks of tasksDone) {
                console.log (`  ${tasks.name}`);
            }
}

addTask("Позавтракать", done, mediumPriority);
addTask("Почесать жопку", toDo, lowPriority);
addTask("Поучиться", inProgress, highPriority);
addTask("Пойти на работу", toDo, highPriority);

showlist();