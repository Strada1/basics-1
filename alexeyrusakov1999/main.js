// "Список дел" на массивах

const STATUS = {
  toDo: "to do",
  inProgress: "in progress...",
  done: "done",
};

const PRIORITY = {
  high: "High",
  low: "Low",
};

const list = [];

let addTask = (taskName, taskPriority) => {
  if (taskPriority !== PRIORITY["high"] && taskPriority !== PRIORITY["low"]) {
    return console.log("Вы задали неправильный приоритет");
  }

  let task = {
    name: taskName,
    status: STATUS["toDo"],
    priority: taskPriority,
  };

  list.push(task);
};

let changeStatus = (taskName, taskStatus) => {
  if (
    taskStatus !== STATUS["toDo"] &&
    taskStatus !== STATUS["inProgress"] &&
    taskStatus !== STATUS["done"]
  ) {
    return console.log("Введите корректный статус задачи");
  }

  let task = list.find((item) => item.name === taskName);
  task.status = taskStatus;
};

let deleteTask = (taskName) => {
  let taskIndex = list.findIndex((item) => item.name === taskName);

  if (taskIndex === -1) {
    return console.log("Вы ввели некорректное название задачи");
  }

  list.splice(taskIndex, 1);
};

let showList = () => {
  for (let status in STATUS) {
    console.log("\n" + STATUS[status] + ":");
    list.filter((item) =>
      item.status === STATUS[status]
        ? console.log(`   ${item.name}(${item.priority})`)
        : ""
    );
  }
};

addTask("Устроиться на работу", "High");

changeStatus("Устроиться на работу", "done");

deleteTask("Устроиться на работу");

addTask("Почистить зубы", "Low");
addTask("Пообедать", "Low");
addTask("Писать код", "High");
addTask("Сходить в магазин", "Low");
changeStatus("Почистить зубы", "done");
changeStatus("Пообедать", "done");
changeStatus("Писать код", "in progress...");

showList();

console.log(list);
