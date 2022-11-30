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
    try {
        const result = list.findIndex(function (item) { //находим индекс 
            return item.name === nameTask; //находим наименования обьекта массива
        });
        if ((result === -1) && (nameTask !== "")) { //если такой задачи нет и наименование задачи не пустое
            list.push({ //то добавляем элемент
                name: nameTask,
                status: STATUS.toDO,
                priority: priority,
            });
        } else {
            throw new Error('Такая задача есть');
        }
    }
    catch (err) {
        if (err.name === "Error")
            alert(err.message);
    }
    finally {
        render(); //обновляем html документ
    }

}

function deleteTask(item) {
    //list.filter(f => f.name !== item.nameTask);
    list.splice(list.indexOf(item), 1); //находим индекс обьекта, удаляем обьект
    render();
};

function changedTask(item, status) {
    item.status = status; //меняем статус
}

function createElement(parent, item) {
    const HIGH_TASK = document.createElement("div"); //создаем див контейнер для таски
    HIGH_TASK.className = "todo__list__high-task"; //задаем ему класс
    parent.append(HIGH_TASK); //добавляем в конец контейнера нужного контейнера
    const checkbox = document.createElement("input"); //создаем элемент чекбокса
    checkbox.setAttribute("type", "checkbox"); //делаем его чекбоксом
    if (item.status === STATUS.done) { //если новая задача выполнена
        HIGH_TASK.classList.add('done'); //то она будет с пометкой выполнена
        checkbox.checked = true; //ее чекбокс тоже отмечен как выполнен
    };
    checkbox.addEventListener("change", function () { //при изменении чекбокса
        HIGH_TASK.classList.toggle("done"); //добавить/удалить класс выполнено
        checkbox.checked ? changeStatus(item, STATUS.done) : changeStatus(item, STATUS.toDO);
    });
    HIGH_TASK.append(checkbox); //добавить чекбокс в див контейнер для таски
    const HIGHT_TASK_ITEM = document.createElement("div"); //див с названием таски
    HIGHT_TASK_ITEM.textContent = item.name; //текст таски будет таким как элемент в массиве
    HIGH_TASK.append(HIGHT_TASK_ITEM);  //добавляем сам текст
    const button = document.createElement("button"); //кнопка удалить
    button.textContent = "x"; //как выглядит
    button.addEventListener("click", function () { //вещаем на кнопку событие удаления
        deleteTask(item); //удаляем в массиве этот обьект таски
    });
    HIGH_TASK.append(button); //добавляем кнопку
}

function render() { //перезагрузка содержимого при изменениях
    hightParent.innerHTML = "";
    lowParent.innerHTML = ""; //очистить сами содержимые контейнеры где будет храниться содержимое массива
    list.forEach(function (item) { //проходим по всем обьектам массива
        item.priority === PRIORITY.high ? createElement(hightParent, item) : createElement(lowParent, item);
    });
}