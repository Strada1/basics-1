const list = [];

const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
}

const PRIORITY = {
    OFF_PRIORITY: 'Not Defined!',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
}


function addTask(nameTask) {
    if(typeof(nameTask) === 'string'){
        list.push({name: nameTask, status: STATUS.TO_DO, priority: PRIORITY.OFF_PRIORITY});
    } else {
        console.log('Дайте имя задаче');
    }
}


function deleteTask(nameTask) {
    let result = list.findIndex(function(item){
        if(nameTask == item.name){
            return item;
        }
    }); if(result != -1) {
        list.splice(result,1);
    } else {
        console.log('Такой задачи нет');
    }
}


function changeStatus(nameTask, status) {
    let searchTask = list.find(function(element){
        if(nameTask == element.name){
            return element;
        }
    }); if(searchTask.name == nameTask){
        searchTask.status = status;
    }
}


function changePriority(nameTask, priority) {
    let searchTask = list.find(function(element){
        if(nameTask == element.name){
            return element;
        }
    }); if(searchTask.name == nameTask){
        searchTask.priority = priority;
    }
}


function showList(){
    list.forEach(function(item){
        if(item.status == STATUS.IN_PROGRESS){
            console.log(`In Progress: \n\t ${item.name}`);
        } else if(item.status == STATUS.TO_DO){
            console.log(`To Do: \n\t ${item.name}`);
        } else if(item.status == STATUS.DONE){
            console.log(`Done: \n\t ${item.name}`);
        }
    }) 
}


addTask('Make a Work');
addTask('Learn JavaScript');
addTask('Go to the Shop');
addTask('Read a Book');
addTask('Write a Post');
// console.log(list);


deleteTask('Go to the Shop');
// console.log(list);


changeStatus('Make a Work', STATUS.IN_PROGRESS);
changeStatus('Write a Post', STATUS.IN_PROGRESS);
changeStatus('Read a Book', STATUS.TO_DO);
// console.log(list);


changePriority('Read a Book', PRIORITY.HIGH);
// console.log(list);

showList();