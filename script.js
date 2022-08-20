const todos = {
  "Eat breakfast": "Done",
  "Do homework": "To Do",
  "Read book": "To Do",
  "Learn JS": "In progress"
};

const addTask = (task) => {
  if (task in todos === false) {
    todos[task] = "To Do";
    return console.log(`Добавлена задача: ${task}`);
  }
  return console.log("Ошибка добавления задачи");
};

const changeStatus = (task, status) => {
  if (task in todos && typeof status === "string") {
    todos[task] = status;
    return console.log(`Изменен статус задачи ${task} на ${status}`);
  }
  return console.log("Ошибка изменения статуса задачи");
};

const deleteTask = (task) => {
  if (task in todos) {
    delete todos[task];
    return console.log(`Удалена задача: ${task}`);
  }
  return console.log("Ошибка удаления задачи");
};

const showList = () => {
  for (let task in todos) {
    if (todos[task] === "Done") {
      console.log("Done: ");
      console.log(`${task}`);
    }
    if (todos[task] === "To Do") {
      console.log("To Do: ");
      console.log(`${task}`);
    }
    if (todos[task] === "In progress") {
      console.log("In progress: ");
      console.log(`${task}`);
    }
  }
};

addTask("Learn TS", "In progress");
showList();

console.log("--------"); // просто разделитель

addTask(123); // ошибка
deleteTask(123); // ошибка
changeStatus(123, "stop"); // ошибка

console.log("--------"); // просто разделитель

showList();

changeStatus("Do homework", "Done");
deleteTask("Do homework");

console.log("--------"); // просто разделитель

showList();

console.log("--------"); // просто разделитель
