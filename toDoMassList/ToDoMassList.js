
const list = [{ name: 'create a post', status: 'In progress', priority: 'low' }, { name: 'test', status: 'Done', priority: 'high' }]

// function addTask(_name, _status, _priority) {
//     newTask = {};
//     newTask.name = _name;
//     newTask.status = _status;
//     newTask.priority = _priority;
//     list.push(newTask);
// }

function changeStatus(_name, _status, _priority) {
    let task = list.find(item => item.name == _name);
    if (task != undefined) {
        task.status = _status;
        task.priority = _priority;
    }
}

function deleteTask(_taskName) {
    let index = list.findIndex(item => item.name == _taskName);
    if (index != -1) {
        list.splice(index, 1);
        return true;
    } else {
        return false;
    }
}

function showList() {
    for (key in list) {
        console.log(list[key]);
    }
}

// let addForm = document.getElementById('add');
// addForm.addEventListener('onsubmit', function () {
//     addTask();
// });

function addTask(_element) {
    let block = `<div class="item"><div class="checkBox"><input type="checkbox"></div><div class="item-text">${_element.firstElementChild.value}</div> <div class="item-close-button"><img src="./icons/close-icon.svg" alt="add icon"></div></div>`;
    _element.insertAdjacentHTML('afterend', block);
    _element.firstElementChild.value = "";
}
// addTask("Sleep!", "In progress", "low");
// changeStatus("Sleep!", "Done", "hi");
// showList();
// console.log("===========================");
// deleteTask("Sleep!");
// showList();