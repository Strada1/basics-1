/*Сегодня напишем простой самый простой TODO лист без графического интерфейса.
Хранилищем будет объект, а имена задач - ключами этого объекта. 
Функция changeStatus - будет менять статус задачи 
Функция addTask - добавляет новую задачу
Функция deleteTask - удаляет задачу
Функция showList будет выводить весь список дел в виде 
 
Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль 
Согласитесь, после чтения статьи, вам стало очевидно что для задачи с TODO вам нужен именно массив, а никак не объект?
При чем, еще интереснее будет иметь массив объектов, например такой:
const list = [ { name: 'create a post', status: 'In progress', priority: 'low'  }, { name: 'test', status: 'Done', priority: 'high'  } ] 
*/

const list = [
    { 
        name: 'create a post', 
        status: 'To Do', 
        priority: 'low'  
    }, 
    { 
        name: 'test', 
        status: 'Done', 
        priority: 'high'  
    },
]

const STATUS = {
    TO_DO: "To Do",
    IN_PROGRESS: "In progress",
    DONE: "Done",
}

const PRIORITY = {
    HIGH: "High",
    LOW: "Low",
}

function addTask(arr) {
    let user = {};
    user.name = prompt("Введите название задачи", 'Задача1');
    user.status = STATUS.TO_DO;
    user.priority = PRIORITY.LOW;
    arr.push(user);
};

function deleteTask(arr, arg) {
    for (let elem of arr){
        if (elem.name == arg) {
            arr.splice(arr.indexOf(elem), 1); 
        }
    }
};

function showList(arr) {
    for (let key in STATUS) {
        console.log(STATUS[key] +':');
        let temp = arr.filter(item=> item.status === STATUS[key]);
        if (temp.length>0) {
            temp.forEach((item)=> console.log('    ' + item.name));
        } else {
            console.log('    ' + '-');
        }
    }
}

function changeStatus(arr, arg) {    
    let elementIndex = arr.findIndex(item => item.name == arg);
    
    if (arr[elementIndex].status == STATUS.TO_DO) {
        arr[elementIndex].status = STATUS.IN_PROGRESS;
        return;
    }
    if (arr[elementIndex].status == STATUS.IN_PROGRESS){
        arr[elementIndex].status = STATUS.DONE;
        return;
    } 
    if (arr[elementIndex].status == STATUS.DONE) {
        console.log('Задача уже сделана, статус DONE');
        return;
    }
    else {
        arr[elementIndex].status = STATUS.TO_DO;
        console.log('Статус задачи установлен как TO DO');
        return;
    }
}

addTask(list);
showList(list);
changeStatus(list, 'create a post');
deleteTask(list, 'test');
showList(list);
