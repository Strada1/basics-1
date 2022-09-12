const list = [
  { name: "create a post", status: "in progress", priority: "low" },
  { name: "test", status: "done", priority: "high" },
];
const PROPERTY = { STATUS: "status", PRIORITY: "priority" };
const STATUS = {
  IN_WORK: "Work",
  DONE: "Done",
  TODO: "To Do",
};
const PRIORITY = {
  LOW: "low",
  HIGH: "high",
};
function addTask(taskName, status, priority) {
  list.push({
    name: taskName,
    status: status ? status : STATUS.TODO,
    priority: priority ? priority : PRIORITY.LOW,
  });
}
function deleteTask(taskName) {
  const res = list.findIndex((item) => item.name === taskName);
  if (res === -1) return console.log("Задача не найдена");
  list.splice(res, 1);
}
function changeProperty(taskName, value, property) {
  const res = list.findIndex((item) => item.name === taskName);
  if (res === -1) return console.log("Задача не найдена");
  list[res][property] = value;
}
function showList() {
  console.log("Задачи:");
  list.forEach((item) => {
    console.log(item);
  });
}
addTask("Сделать задачи", STATUS.TODO, PRIORITY.HIGH);
addTask("Работать", STATUS.DONE, PRIORITY.HIGH);
changeProperty("Сделать задачи", STATUS.DONE, PROPERTY.STATUS);
showList();
changeProperty("Сделать задачи", PRIORITY.LOW, PROPERTY.PRIORITY);
showList();
deleteTask("Сделать задачи");
showList();
