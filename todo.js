// ToDo v.1.0
const toDoList = {
    addTask(title) {
        return this[title] = 'undone';
    },
    deleteTask(title) {
        delete this[title];
    },
    changeStatus(title, status) {
        if(this[title] === undefined) {
            return;
        }
        else {
            this[title] = status;
        }
    },
    showList() {
        console.log('Done:');
        for(let key in this) {
            if(this[key] === 'done') {
                console.log('   ' + '"' + key + '"');
            }
        }
        console.log('In progress:');
        for(let key in this) {
            if(this[key] === 'in progress') {
                console.log('   ' + '"' + key + '"');
            }
        }
        console.log('Undone:');
        for(let key in this) {
            if(this[key] === 'undone') {
                console.log('   ' + '"' + key + '"');
            }
        }
    },
}

toDoList.addTask('Скушать пончик');
toDoList.addTask('Погулять в лесу');
toDoList.addTask('Написать скрипт');
toDoList.addTask('Покормить мухоловку');
toDoList.addTask('Погладить таракана');
toDoList.addTask('Увидеть рассвет');
toDoList.changeStatus('Скушать пончик', 'done');
toDoList.changeStatus('Погулять в лесу', 'done');
toDoList.changeStatus('Написать скрипт', 'in progress');
toDoList.changeStatus('Покормить мухоловку', 'in progress');
console.log(toDoList.showList());