// Калькулятор на if/else

const calc = (a, b, operation) => {
  a = +prompt("Введите первое число.", "");
  b = +prompt("Введите второе число", "");
  operation = prompt("Введите название операции");

    if (typeof b === "number" && typeof a === "number") {
      if (operation === "add" || operation == "+") {
        return a + b;
      } else if (operation === "multi" || operation === "*") {
        return a * b;
      } else if (operation === "subtract" || operation === "-") {
        return a - b;
      } else {
        return alert(
          "К сожалению, на данный момент мы не можем выполнить эту операцию."
        );
      }
    } else {
      return alert("Вы ввели не число, введите числа и попробуйте еще раз.");
    }
  };

  // Калькулятор на Switch/Case

  switch (operation) {
    case "add":
      alert(a + b);
      break;
    case "multi":
      alert(a * b);
      break;
    case "subtract":
      alert(a - b);
      break;
    default:
      alert("Эта операция не поддерживается");
  }
};

calc();

console.log(calc(4, 5, "+"));


// Калькулятор на Switch/Case

const calc = (a, b, operation) => {
  const operations = {
    add: "+",
    multi: "*",
    subtract: "-",
  };

  switch (operation) {
    case operations.add:
      console.log(a + b);
      break;
    case operations.multi:
      console.log(a * b);
      break;
    case operations.subtract:
      console.log(a - b);
      break;
    default:
      console.log("Эта операция не поддерживается");
  }
};

console.log(calc(5, 7, "+"));

console.log(calc(4, 5, "+"));



// 'Список дел' на объектах

const list = {};

function addTask(taskName) {
  list[taskName] = "pending";
}

function changeStatus(taskName, status) {
  list[taskName] = status;

  if (
    status !== "pending" &&
    status !== "in progress..." &&
    status !== "done"
  ) {
    console.log("Введите корректный статус задачи");
  }
}

function deleteTask(taskName) {
  if (taskName in list === true) {
    delete list[taskName];
  } else {
    console.log("Такой задачи нет в списке дел!");
  }
}

function showList() {
  let pendingTasks = "";
  let tasksInProgress = "";
  let doneTasks = "";

  for (let taskName in list) {
    if (list[taskName] === "pending") {
      pendingTasks += taskName + "\n";
    } else if (list[taskName] === "in progress...") {
      tasksInProgress += taskName + "\n";
    } else if (list[taskName] === "done") {
      doneTasks += taskName + "\n";
    } else {
      console.log("Какая то ошибка");
    }

    console.log(
      "\n" +
        "Pending:" +
        "\n" +
        (pendingTasks || "Задачи отсутствуют" + "\n") +
        "\n" +
        "In progress:" +
        "\n" +
        (tasksInProgress || "Задачи отстутствуют" + "\n") +
        "\n" +
        "Done:" +
        "\n" +
        (doneTasks || "Задачи отсутствуют" + "\n")
    );
  }
}

changeStatus("Купить еды", "in progress...");
changeStatus("Почистить зубы", "done");
changeStatus("Купить еды", "pending");
changeStatus("Сделать задание в Страде", "in progress...");

deleteTask("Купить еды");

addTask("Запушить задание на гитхаб");
addTask("Поужинать");
changeStatus("Запушить задание на гитхаб", "in progress...");

showList();

console.log(list)



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
