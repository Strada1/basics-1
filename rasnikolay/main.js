const hightParent = document.querySelector(".todo_container-high .container");
const lowParent = document.querySelector(".todo_container-low .container");
const taskFormHigh = document.querySelector(".todo_container-high");
const taskFormLow = document.querySelector(".todo_container-low");

const STATUS = {
    toDO: "to do",
    done: "done",
};

const PRIORITY = {
    high: "high",
    low: "low",
};

const list = [];

taskFormHigh.addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.currentTarget; //обращаемся к текущей форме
    const input = form.querySelector("input[type=text]"); //находим в ней инпут
    addTask(input.value, PRIORITY.high); //передаем значение инпута
});

taskFormLow.addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.querySelector("input[type=text]");
    addTask(input.value, PRIORITY.low);
});

function addTask(nameTask, priority) {
    let result = list.findIndex(function (item) { //находим индекс 
        return item.name === nameTask; //находим наименования обьекта массива
    });
    if ((result === -1) && (nameTask !== "")) { //если такой задачи нет и наименование задачи не пустое
        list.push({ //то добавляем элемент
            name: nameTask,
            status: STATUS.toDO,
            priority: priority,
        });

    }
    render(); //обновляем html документ
}

function deleteTask(item) {
    list.splice(list.indexOf(item), 1); //находим индекс обьекта, удаляем обьект
    render();
};

function changedTask(item, status) {
    item.status = status; //меняем статус
}

function createElement(parent, item) {
    let todoListHighTask = document.createElement("div"); //создаем див контейнер для таски
    todoListHighTask.className = "todo__list__high-task"; //задаем ему класс
    parent.append(todoListHighTask); //добавляем в конец контейнера нужного контейнера
    let checkbox = document.createElement("input"); //создаем элемент чекбокса
    checkbox.setAttribute("type", "checkbox"); //делаем его чекбоксом
    if (item.status === STATUS.done) { //если новая задача выполнена
        todoListHighTask.classList.add('done'); //то она будет с пометкой выполнена
        checkbox.checked = true; //ее чекбокс тоже отмечен как выполнен
    };
    checkbox.addEventListener("change", function () { //при изменении чекбокса
        todoListHighTask.classList.toggle("done"); //добавить/удалить класс выполнено
        if (checkbox.checked) { //если элемент выбран
            changeStatus(item, STATUS.done); //значит статус выполнен в массиве
        } else {
            changeStatus(item, STATUS.toDO); //значит статус в работе в массиве
        }
    });
    todoListHighTask.append(checkbox); //добавить чекбокс в див контейнер для таски
    let todoListHighTaskItemText = document.createElement("div"); //див с названием таски
    todoListHighTaskItemText.textContent = item.name; //текст таски будет таким как элемент в массиве
    todoListHighTask.append(todoListHighTaskItemText);  //добавляем сам текст
    let button = document.createElement("button"); //кнопка удалить
    button.textContent = "x"; //как выглядит
    button.addEventListener("click", function () { //вещаем на кнопку событие удаления
        deleteTask(item); //удаляем в массиве этот обьект таски
    });
    todoListHighTask.append(button); //добавляем кнопку
}

function render() { //перезагрузка содержимого при изменениях
    hightParent.innerHTML = "";
    lowParent.innerHTML = ""; //очистить сами содержимые контейнеры где будет храниться содержимое массива
    list.forEach(function (item) { //проходим по всем обьектам массива
        if (item.priority === "high") { //если задача с повышенным приоритетом
            createElement(hightParent, item); //добавляем в контейнер с high
        } else {
            createElement(lowParent, item); //добавляем в контейнер с low
        }
    });
}