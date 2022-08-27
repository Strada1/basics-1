const list = [];

let toDo="Сделать";
let inProgress="In Progress";
let done="Done";

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
    let taskToFind = list.find(item => item.name===task); // 1. Найти позицию объекта (элемента массива), в котором свойство name = искомая task
    taskToFind.status = newStatus; // 2. Поменять у найденного объекта свойство status на newStatus
}

function changePrior(task, newPriority) {
    let taskToFind = list.find (item =>item.name===task); //1. Найти позицию объекта (элемента массива), в котором свойство name = искомая task
    taskToFind.priority = newPriority; //2. Поменять у найденного объекта свойство priority на newPriority
}

