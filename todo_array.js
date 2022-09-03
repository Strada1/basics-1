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


	list.filter(function(item) {

        if (item.status === STATUS.TO_DO) {

            return `To Do: \n\t${item.name}`;
        }

        if (item.status === STATUS.IN_PROGRESS) {

            return `In Progress: \n\t${item.name}`;
        }

        if (item.status === STATUS.DONE) {

            return `Done: \n\t${item.name}`;
        }
    });

};


addTask('hiking', 'To Do', 'low');
addTask('write some code', 'In Progress', 'high');
addTask('do shopping', 'To Do', 'low');
deleteTask('test');
changeStatus('breakfast', 'Done');
showList();
