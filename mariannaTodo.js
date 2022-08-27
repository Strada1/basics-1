/*Сегодня напишем простой самый простой TODO лист без графического интерфейса.
Хранилищем будет объект, а имена задач - ключами этого объекта. 
Функция changeStatus - будет менять статус задачи 
Функция addTask - добавляет новую задачу
Функция deleteTask - удаляет задачу
Функция showList будет выводить весь список дел в виде 
 
Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль */

let todoList = {
    addTask() {
        let key = prompt("Введите название задачи", 'Задача1');
        this[key] = prompt("Введите статус задачи: 'To Do', 'In Progress', 'Done'", 'To Do');
    },
    
    changeStatus(key) {
        if (this[key] == 'To Do') {
            this[key] = 'In Progress';
        } else if (this[key] == 'In Progress') {
            this[key] = 'Done';
        } else {
            this[key] = 'To Do';
        }
    },

    deleteTask(key) {
        delete this[key];
    },

    showList() {
        console.log('To Do:');
        let todo = false;
        for (key in this) {
            if (this[key] == 'To Do') {
                todo = true;
                console.log('    ' + key);
            }
        }
        if (todo == false) {
            console.log('    ' + '-');
        }

        console.log('In Progress:');
        let inprogress = false;
        for (key in this) {
            if (this[key] == 'In Progress') {
                inprogress = true;
                console.log('    ' + key);
            }
        }
        if (inprogress == false) {
            console.log('    ' + '-');
        }

        console.log('Done:');
        let done = false;
        for (key in this) {
            if (this[key] == 'Done') {
                todo = true;
                console.log('    ' + key);
            }
        }
        if (done == false) {
            console.log('    ' + '-');
        }
    },
};

let myList = todoList; 
myList.addTask();
myList.addTask();

myList.showList();
myList.changeStatus('Задача1');
myList.showList();
myList.deleteTask('Задача1');
myList.showList();
