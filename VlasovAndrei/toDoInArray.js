const statuses = {
    TODO: 'To Do',
    INPROGRESS: 'In Progress',
    DONE: 'Done',
}

const priorities = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
}

const list = [
    {name: 'make homework', status: statuses.DONE, priority: priorities.LOW},
    {name: 'have a meal', status: statuses.TODO, priority: priorities.NORMAL},
    {name: 'feed the cat', status: statuses.TODO, priority: priorities.HIGH},
    {name: 'learning JS', status: statuses.INPROGRESS, priority: priorities.HIGH},
]

function isValidStatus(status) {
    return status == statuses.TODO || status == statuses.INPROGRESS || status == statuses.DONE; 
}

function isValidPriority(priority) {
    return priority == priorities.LOW || priority == priorities.NORMAL || priority == priorities.HIGH;
}

function isValidTask(task) {
    return list.find(item => item.name == task);
}

function addTask(task, priority) {
    list.push({name: task, status: statuses.TODO, priority: priority}); 
}

function changeStatus(task, status) {
    isValidStatus(status) && isValidTask(task) ? list.find(item => item.name === task).status = status : console.log('wrong data');
}

function changePriority(task, priority) {
    isValidPriority(priority) && isValidTask(task) ? list.find(item => item.name === task).priority = priority : console.log('wrong data');
}

function deleteTask(task) {
    isValidTask(task) ? list.splice(list.indexOf(list.find(item => item.name === task)), 1) : console.log('wrong task');
}

function showList() {
    let resultList = ``;
    for (let key in statuses) {
        let isProps = false;
        resultList += `${statuses[key]}:\n`;
        list.forEach(item => {
            if (item.status == statuses[key]) {
                resultList += `\t${item.name}: ${item.priority}\n`;
                isProps = true;
            }
        })
        if (isProps == false) {
            resultList +='\t-\n';
        }
    }
    console.log(resultList);
}

addTask('test', 'low');
console.log(list);
changeStatus('feed the cat', 'In Progress');
changeStatus('have a meal', 'In Progres'); // проверка неправильного статуса, без двойной s
changePriority('learning JS', 'norman'); // проверка неправильного приоритета
changeStatus('make homework', 'To Do');
changePriority('learning JS', 'normal'); 
changePriority('learning Js', 'high'); // проверка на некорректную таску
deleteTask('test');
deleteTask('feed the dog'); // проверка на удаление несуществующей таски
console.log(list);
showList();