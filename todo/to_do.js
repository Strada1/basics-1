const statusTask = {
  ToDo: "ToDo",
  in_progress: "in Progress",
  Done: "Done",
};
const list = {
  "create a new practice task": statusTask.in_progress,
  "make a bed": statusTask.Done,
  "write a post": statusTask.ToDo,
};
function isNotValidTask(keyTask) {
  return keyTask in list === undefined ? true : false;
}
function changeStatus(keyTask, statusTask) {
  isNotTask = isNotValidTask(keyTask);
  if (!isNotTask) {
    list[keyTask] = statusTask;
  }
}
function addTask(keyTask) {
  list[keyTask] = statusTask.in_progress;
}
function deleteTask(keyTask) {
  isNotTask = isNotValidTask(keyTask);
  if (!isNotTask) {
    delete list[keyTask];
  }
}
function showTaskInStatus(statusTask) {
  console.log(statusTask + ":");
  let counterEnableTask = 0;
  for (const key in list) {
    if (list[key] === statusTask) {
      console.log(' "' + key + '",');
      counterEnableTask++;
    }
  }
  if (!counterEnableTask) console.log(" -");
}
function showList() {
  showTaskInStatus(statusTask.ToDo);
  showTaskInStatus(statusTask.in_progress);
  showTaskInStatus(statusTask.Done);
}
changeStatus("create a new practice task", statusTask.ToDo);
deleteTask("make a bed");
addTask("tururu");
showList();
