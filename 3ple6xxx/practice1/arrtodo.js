const list = [
  { name: "create a post", status: "in progress", priority: "low" },
  { name: "test", status: "done", priority: "high" },
];
const STATUS = {
  STATUS_IN_WORK: "Work",
  STATUS_DONE: "Done",
  STATUS_TODO: "To Do",
};
const PRIORITY = {
  PRIORITY_LOW: "low",
  PRIORITY_HIGH: "high",
};
function addTask(taskName) {
  list.push({
    name: taskName,
    status: STATUS.STATUS_TODO,
    priority: PRIORITY.PRIORITY_LOW,
  });
}
function deleteTask(taskName) {
  const res = list.findIndex((item) => item.name === taskName);
  if (res === -1) return console.log("Задача не найдена");
  list.splice(res, 1);
}
function changeStatus(taskName, status) {
  const res = list.findIndex((item) => item.name === taskName);
  if (res === -1) return console.log("Задача не найдена");
  list[res].status = status;
}
function showList() {
  console.log("Задачи:");
  list.forEach((item) => {
    console.log(item);
  });
}
addTask("123", "Work", "high");
addTask("456", "Done", "low");
showList();
changeStatus("123", "Done");
showList();
deleteTask("123");
showList();