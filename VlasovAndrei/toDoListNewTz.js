const toDo = {
    list: {
    },
    statuses: {
        toDo: 'To do',
        inProgress: 'In progress',
        done: 'Done',
    },
    addTask() {
        this.list[prompt('What to do?')] = 'To do';
    },
    changeStatus() {
        this.list[prompt('Which task to change?')] = prompt('New status?');
    },
    deleteTask() {
        delete this.list[prompt('Which task to delete?')];
    },
    showList() {
        let toDoList = '';
        let inProgressList = '';
        let doneList = '';
        for(let key in this.list) {
            if (this.list[key] === this.statuses.toDo) {
                toDoList += `\t\t${key}\n`;
            } else if (this.list[key] === this.statuses.done) {
                doneList += `\t\t${key}\n`;
            } else if (this.list[key] === this.statuses.inProgress) {
                inProgressList += `\t\t${key}\n`;
            }
        }
        let list = `${this.statuses.toDo}:\n${toDoList}${this.statuses.inProgress}:\n${inProgressList}${this.statuses.done}:\n${doneList}`;
        console.log(list);
    },
}

toDo.addTask();
toDo.addTask();
toDo.addTask();
toDo.showList();
toDo.changeStatus();
toDo.showList();
toDo.deleteTask()
toDo.showList();