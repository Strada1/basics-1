const STATUS_NEW = 'new';
const STATUS_IN_PROGRESS = 'in progress';
const STATUS_DONE = 'done';
const PRIORITY_HIGH = 'high';
const PRIORITY_MIDDLE = 'middle';
const PRIORITY_LOW = 'low';

const STATUSES = [
    STATUS_NEW,
    STATUS_IN_PROGRESS,
    STATUS_DONE,
];

const PRIORITIES = [
    PRIORITY_HIGH,
    PRIORITY_MIDDLE,
    PRIORITY_LOW,
]

let todo = {
    storage: [],

    addTask(taskName, taskPriority) {
        if (!this.isPriorityValid(taskPriority)) {
            console.log('Unknown priority')
            return;
        }
        let task = {
            name: taskName,
            priority: taskPriority,
            status: STATUS_NEW
        };
        this.storage.push(task)
    },

    deleteTask(taskName) {
        for (let i = 0; i < this.storage.length; i++) {
            let task = this.storage[i];
            if (task.name === taskName) {
                this.storage.splice(i, 1)
            }
        }
    },

    isStatusValid(newStatus) {
        for (let status of STATUSES) {
            if (newStatus === status) {
                return true;
            }
        }
        return false;
    },

    isPriorityValid(newPriority) {
        for (let priority of PRIORITIES) {
            if (newPriority === priority) {
                return true;
            }
        }
        return false;
    },

    changeStatus(taskName, newStatus) {
        if (!this.isStatusValid(newStatus)) {
            console.log("Unknown status");
            return;
        }

        let task = this.storage.find(function (item) {
            if (item.name === taskName) {
                return true;
            }
        })
        if (task !== undefined) {
            task.status = newStatus;
        }

    },

    showList() {
        for (let status of STATUSES) {
            console.log(status) + ":";
            let isEmpty = true;
            for (let task of this.storage) {
                if (status === task.status) {
                    console.log("    " + task.name);
                    isEmpty = false;
                }
            }
            if (isEmpty === true) {
                console.log("    -")
            }
        }
    }
}

function render() {
    const divContainer = document.getElementsByClassName('container')[0];
    divContainer.replaceChildren();
    for (priority of PRIORITIES) {
        const priorityBlock = createPriorityBlock(priority);
        divContainer.append(priorityBlock);

    }
}

function createPriorityBlock(priority) {
    const divBlock = document.createElement('div');
    divBlock.className = "block";

    const divTitle = document.createElement('div');
    divTitle.className = "title";
    divBlock.append(divTitle);

    const h3 = document.createElement('h3');
    h3.innerHTML = priority[0].toUpperCase() + priority.slice(1);
    divTitle.append(h3);

    const addBlock = createAddBlock(priority);
    divBlock.append(addBlock);

    const list = createList(priority);
    divBlock.append(list);

    return divBlock;
}

function createAddBlock(priority) {
    const divAdd = document.createElement('div');
    divAdd.className = 'add';

    const form = document.createElement('form');
    form.onsubmit = function () {
        addTodo(priority);
        render();
    }
    form.autocomplete = 'off';
    divAdd.append(form);

    const input = document.createElement('input');
    input.id = 'input-' + priority;
    input.type = 'text';
    input.placeholder = 'Добавить важных дел';
    form.append(input);

    const div = document.createElement('div');
    div.className = 'icon-action icon-add';
    form.append(div);

    const button = document.createElement('button');
    button.type = 'submit';
    div.append(button);

    const i = document.createElement('i');
    i.className = 'fa fa-plus'
    i.ariaHidden = 'true';
    button.append(i);

    return divAdd;
}

function createList(priority) {
    const divList = document.createElement('div');
    divList.id = 'list-' + priority;
    divList.className = 'list';

    const tasks = todo.storage.filter(item => item.priority === priority);
    for (let task of tasks) {
        const taskItem = createItem(task);
        divList.append(taskItem);
    }

    return divList;
}


function addTodo(priority) {
    const input = document.getElementById("input-" + priority);
    const text = input.value;
    if (!text) return;
    input.value = "";

    todo.addTask(text, priority)
}

function createItem(task) {
    const divListItem = document.createElement("div");
    divListItem.className = "list-item";

    const input = document.createElement("input");
    input.checked = task.status === STATUS_DONE;
    input.type = "checkbox";
    input.addEventListener('change', function () {
        const status = input.checked ? STATUS_DONE : STATUS_NEW;
        todo.changeStatus(task.name, status);
        render();
    })
    divListItem.append(input);

    const divText = document.createElement("div");
    divText.className = "text";
    divText.innerHTML = task.name;
    divListItem.append(divText);

    const divIcon = document.createElement("div");
    divIcon.addEventListener('click', function () {
        todo.deleteTask(task.name);
        render();
    });

    divIcon.classList.add("icon-action");
    divIcon.classList.add("icon-close");
    divListItem.append(divIcon);

    const iIcon = document.createElement("i");
    iIcon.classList.add("fa");
    iIcon.classList.add("fa-times");
    iIcon.ariaHidden = true;
    divIcon.append(iIcon);

    return divListItem;
}

document.addEventListener('DOMContentLoaded', render);