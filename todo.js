const list = [ { name: 'create a post', status: 'in progress', priority: 'low'  }, { name: 'test', status: 'done', priority: 'high'  } ]

function changeStatus(arr, task, newStatus, newPriority) {
    let changeTask = arr.find(function(item) {return item.name == task});
    changeTask.status = newStatus;
    changeTask.priority = newPriority;
}

function addTask(arr, task) {
    arr.push(task);
}

function deleteTask(arr, task) {
    let index = arr.findIndex(function(item) {return item.name == task});
    arr.splice(index, 1);
}

function showList (arr) {
    console.log('To do:');
    arr.forEach(function(item) {if (item.status == 'to do') {console.log(item.name, '* priority -', item.priority)}});
    console.log(('In Progress:'));
    arr.forEach(function(item) {if (item.status == 'in progress') {console.log(item.name, '* priority -', item.priority)}});
    console.log('Done:');
    arr.forEach(function(item) {if (item.status == 'done') {console.log(item.name, '* priority -', item.priority)}});
}




addTask(list, {name: 'finish todo', status: 'in progress', priority: 'high'});
addTask(list, {name: 'relax', status: 'to do', priority: 'low'});
changeStatus(list, 'create a post', 'done', 'high');
deleteTask(list, 'test');
showList(list);