const STATUS = {

    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done'
};

const PRIORITY = {

    LOW: 'low',
    HIGH: 'high'
};

const list = [
    {
        name: 'create a post',
        status: STATUS.IN_PROGRESS,
        priority: PRIORITY.LOW
    },

    {
        name: 'test',
        status: STATUS.DONE,
        priority: PRIORITY.HIGH
    },

    {
        name: 'breakfast',
        status: STATUS.TO_DO,
        priority: PRIORITY.HIGH
    }

];

function addTask(task, status, priority) {

    return list.push({
        name: task,
        status: status,
        priority: priority
    });

};

function deleteTask (task) {

    let arrIndex = list.findIndex(item => item.name == task);
    if (arrIndex !== -1) {
        return list.splice(arrIndex, 1);
    }

};

function changeStatus (task, taskStatus) {

    let findElement = list.find(item => item.name == task);
    return findElement.status = taskStatus;

};

function showList () {

    // увидела на эфире в одном из файлов - вроде поняла, без переменных тут не получится

    let toDo = 'To Do:\n';
    let inProgress = 'In Progress:\n';
    let done = 'Done:\n';

    list.forEach(function (item) {

        let showTasks = `\t${item.name}\n`;

        if (item.status === STATUS.TO_DO) {

            toDo += showTasks;
        }

        else if (item.status === STATUS.IN_PROGRESS) {

            inProgress += showTasks;
        }

        else if (item.status === STATUS.DONE) {

            done += showTasks;
        }

        else {

            return 'Error';
        }
    });

    return(`${toDo} ${inProgress} ${done}`);

};

addTask('hiking', STATUS.TO_DO, PRIORITY.LOW);
addTask('write some code', STATUS.IN_PROGRESS, PRIORITY.HIGH);
addTask('do shopping', STATUS.TO_DO, PRIORITY.LOW);
deleteTask('test');
changeStatus('breakfast', STATUS.DONE);
console.log(showList());
