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
        status: 'In progress', 
        priority: 'low'  
    }, 
    { 
        name: 'test', 
        status: 'Done', 
        priority: 'high'  
    },
]

function addTask(arr) {
    let user = {};
    user.name = prompt("Введите название задачи", 'Задача1');
    user.status = 'To Do';
    user.priority = 'low';
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
    let todo = [];
    let inprogress = [];
    let done = [];
    for (let elem of arr){
        if (elem.status == 'To Do') {
            todo.push(elem.name);}
        if (elem.status == 'In progress') {
            inprogress.push(elem.name);}
        if (elem.status == 'Done') {
            done.push(elem.name);
        } 
    }
    console.log('To Do:');
    if (todo.length>0){
        for (let element of todo){
            console.log('    ' + element);
    }} else {
        console.log('    ' + '-');
    }
    console.log('In progress:');
    if (inprogress.length>0){
        for (let element of inprogress){
            console.log('    ' + element);
    }} else {
        console.log('    ' + '-');
    }
    console.log('Done:');
    if (done.length>0){
        for (let element of done){
            console.log('    ' + element);
    }} else {
        console.log('    ' + '-');
    }
}

function changeStatus(arr, arg) {
    statuses = ['To Do','In progress', 'Done'];
    for (let elem of arr){
        if (elem.name == arg) {
            if (elem.status != 'Done') {
                elem.status = statuses[statuses.indexOf(elem.status)+1];
            }
            else {console.log('Already done');}
        }
    }
}

addTask(list);
showList(list);
changeStatus(list, 'create a post');
deleteTask(list, 'test');
showList(list);
