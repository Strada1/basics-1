//TODO list

const TODO = {
    statuses: {
        'added': 'added',
        'active': 'active',
        'done': 'done',
        'deleted': 'deleted',
    },
    tasks: {},
    addTask() {
        let task = prompt('add task');
        this.tasks[task] = this.statuses['added'];
        this.showList();
    },
    changeStatus() {
        let taskToChange = prompt('choose task to change', '');
        let chooseStatus = prompt('choose status', 'added, active, done, deleted');
        this.tasks[taskToChange] = this.statuses[chooseStatus];
        alert(`${taskToChange.toUpperCase() + ' changed status to ' + chooseStatus}`)
        this.showList();
    },
    deleteTask() {
        let taskToDelete = prompt('which task to delete?');
        delete this.tasks[taskToDelete];
        alert(`${taskToDelete.toUpperCase() + ' deleted'}`);
        this.showList();
    },
    showList() {
        let tasksList = 'List of tasks:\n';
        for (let prop in this.tasks) {
            tasksList += `${prop.toUpperCase() + ': ' + this.tasks[prop] + '\n'}`;
        }
        alert(tasksList);
    },
}

TODO.addTask();
TODO.addTask();
TODO.changeStatus();
TODO.deleteTask();
