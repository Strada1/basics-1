//ToDo на массивах с проверками и сортировкой в ShowList

const statuses = {
    TODO: 'To Do',
    INPROGRESS: 'In Progress',
    DONE: 'Done',
}

const priorities = {
    LOW: 'Low',
    NORMAL: 'Normal',
    HIGH: 'High',
}

const list = [
    {name: 'make homework', status: statuses.DONE, priority: priorities.LOW},
    {name: 'have a meal', status: statuses.TODO, priority: priorities.NORMAL},
    {name: 'feed the cat', status: statuses.TODO, priority: priorities.HIGH},
    {name: 'go shopping', status: statuses.TODO, priority: priorities.NORMAL},
    {name: 'learning JS', status: statuses.INPROGRESS, priority: priorities.HIGH},
    {name: 'reading chat', status: statuses.INPROGRESS, priority: priorities.LOW},
    {name: 'doing the housework', status: statuses.INPROGRESS, priority: priorities.LOW},
    {name: 'watching TV', status: statuses.INPROGRESS, priority: priorities.HIGH},
]

function getArrayElement(task) {
    return list.find(item => item.name === task);
}

function isValidStatus(status) {
    let isValid = false;
    for (key in statuses) {
        statuses[key] === status ? isValid = true : isValid;
    }
    return isValid;
}

function isValidPriority(priority) {
    let isValid = false;
    for (key in priorities) {
       priorities[key] === priority ? isValid = true : isValid;
    }
    return isValid;
}

function isValidTask(task) {
    return list.find(item => item.name == task);
}

function addTask(task, priority) {
    !isValidPriority(priority) || isValidTask(task) ? console.log('wrong priority or the task already exists') : list.push({name: task, status: statuses.TODO, priority: priority}); 
}

function changeStatus(task, status) {
    isValidTask(task) && getArrayElement(task).status !== status && isValidStatus(status) ? getArrayElement(task).status = status : console.log('wrong or the same status or the task doesn\'t exist');
}

function changePriority(task, priority) {
    isValidTask(task) && getArrayElement(task).priority !== priority && isValidPriority(priority) ? getArrayElement(task).priority = priority : console.log('wrong or the same status or the task doesn\'t exist');
}

function deleteTask(task) {
    isValidTask(task) ? list.splice(list.indexOf(getArrayElement(task)), 1) : console.log('there\'s no such task');
}

function showListByStatus() {
    for (let key in statuses) {
        function sortByPriority(a, b) {
            const priorityA = a.priority;
            const priorityB = b.priority;
            return priorityA > priorityB ? 1 : -1;
        }
        let result = [];
        list.filter(item => item.status === statuses[key]).sort((a, b) => sortByPriority(a, b)).map(item => result.push(`${item.name} - ${item.priority}`));
        result.length === 0 ? console.log(`${statuses[key]}:\n\t-`) : console.log(`${statuses[key]}:\n \t${result.join('\n\t')}`);
    }
}

function showListByPriority() {
    for (let key in priorities) {
        function sortByStatus(a, b) {
            const statusA = a.status;
            const statusB = b.status;
            return statusA > statusB ? 1 : -1;
        }
        let result = [];
        list.filter(item => item.priority === priorities[key]).sort((a, b) => sortByStatus(a ,b)).map(item => result.push(`${item.name} : ${item.status}`));
        result.length === 0 ? console.log(`${priorities.key}:\n\t-`) : console.log(`${priorities[key]}:\n\t${result.join('\n\t')}`);
    }
}

addTask('test', 'Low');
addTask('make homework', 'Low'); // проверка на уже существующую таску
addTask('go shopping', 'Very high'); // проверка на неправильный приоритет
console.log(list);
changeStatus('feed the cat', 'In Progress');
changeStatus('go shopping', 'To Do'); //проверка на тот же самый статус
changePriority('learning JS', 'Norman'); // проверка неправильного приоритета
changeStatus('have a meal', 'In Progres'); // проверка неправильного статуса, без двойной s
changeStatus('make homework', 'To Do');
changePriority('learning JS', 'Normal'); 
changePriority('drinking beer', 'Normal'); // проверка на некорректную таску
deleteTask('test');
console.log(list);
deleteTask('feed the dog'); // проверка на удаление несуществующей таски
showListByStatus();
showListByPriority();
