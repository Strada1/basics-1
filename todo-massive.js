const STATUS = {
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
    TODO: 'To Do',
};

const PRIORITY = {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGHT: 'Hight',
};

const ERROR = {
    NOT_FOUND: 'Task not found',
    NOT_STRING: 'Incorrect task name',
    NOT_SOUCH_ST: 'There is no such task or status',
    NOT_SOUCH_PR: 'There is no such task or priority',
}

const DEFAULT_STATUS = STATUS.TODO;

const DEFAULT_PRIORITY = PRIORITY.MEDIUM;

let list = [
    {
        name: 'Create a new practice task',
        status: STATUS.IN_PROGRESS,
        priority: PRIORITY.LOW,
    },
    {
        name: 'Make a bed',
        status: STATUS.DONE,
        priority: PRIORITY.MEDIUM,
    },
    {
        name: 'Write a post',
        status: STATUS.TODO,
        priority: PRIORITY.HIGHT,
    }
];

function changeStatus(findTask, replaceStatus) {
    let result = list.findIndex(function (findItem) {
        return findItem.name === findTask;
    });
    if (result === -1 || typeof (replaceStatus) !== 'string') {
        console.log(ERROR.NOT_SOUCH_ST);
    } else {
        return list[result].status = replaceStatus;
    };
};

function addTask(newTask) {
    if (typeof (newTask) === 'string') {
        return list
            .push({ name: newTask, status: DEFAULT_STATUS, priority: DEFAULT_PRIORITY });
    } else {
        console.log(ERROR.NOT_STRING);
    };
};

function deleteTask(deleteTask) {
    let result = list.findIndex(function (findItem) {
        return findItem.name === deleteTask
    });
    if (result === -1) {
        console.log(ERROR.NOT_FOUND);
    } else {
        return list.splice(result, 1);
    };
};

function changePriority(findTask, replacePriority) {

    let result = list.findIndex(function (findItem) {
        return findItem.name === findTask;
    });
    if (result === -1 || typeof (replacePriority) !== 'string') {
        console.log(ERROR.NOT_SOUCH_PR);
    } else {
        return list[result].priority = replacePriority;
    };
};

function showList() {
    console.log('To Do List:' + '\n');
    console.log(`${STATUS.IN_PROGRESS}` + ':');
    list.map(function (createItem) {
        if (createItem.status === STATUS.IN_PROGRESS) {
            console.log(createItem)
        };
    });

    console.log('\n');
    console.log(`${STATUS.DONE}` + ':');
    list.map(function (createItem) {
        if (createItem.status === STATUS.DONE) {
            console.log(createItem)
        };
    });

    console.log('\n');
    console.log(`${STATUS.TODO}` + ':');
    list.map(function (createItem) {
        if (createItem.status === STATUS.TODO) {
            console.log(createItem)
        };
    });
};

changeStatus('Create a new practice task', STATUS.TODO);
addTask('Create a project');
changePriority('Create a project', PRIORITY.LOW);
deleteTask('Write a post');
addTask('Run');
changeStatus('Run', STATUS.IN_PROGRESS);
changePriority('Run', PRIORITY.HIGHT);
showList();
