let toDoList = {
    'wash the dishes': 'new',
    'read a psychology literature': 'done',

    changeStatus(task, newStatus) {
        if (task in this) {
            this[task] = newStatus;
        }
    },

    addTask(task) {
        this[task] = 'new';
    },

    deleteTask(task) {
        if (task in this) {
            delete this[task];
        }
    },

    showList() {
        for (let task in this) {
            if (typeof (this[task]) == "string") { console.log(`${task} : ${this[task]}`); }
        }
    },
}

toDoList.addTask('cook a cake');
toDoList.showList();
toDoList.changeStatus('cook a cake', 'done');
toDoList.changeStatus('wash the dishes', 'in progress');
toDoList.showList();
toDoList.deleteTask('wash the dishes');
toDoList.showList();