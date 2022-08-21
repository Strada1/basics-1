const STATUS  = {
  TO_DO: "To Do",
  In_Progress: "In Progress",
  Done: "Done",
}

const list = { };

function changeStatus(task, NewStatus) {
  if(list[task]) {
    list[task] = NewStatus;
  } else {
    console.log("Нет задачи с таким именем")
  }
}

function addTask(task) {
  if(!list[task]) {
    list[task] = STATUS.TO_DO;
  } else {
    console.log("Уже есть такая задача")
  }
  
}

function deleteTask(task) {
  if(list[task]) {
    delete list[task];
  } else {
    console.log("Нет задачи с таким именем")
  }
}

let GroupTO_Do = '';
let GroupIn_Progress= '';
let Group_Done = '';

function showList() {
  for(let key in list)
  if(list[key] == STATUS.TO_DO) {
    GroupTO_Do += `\n \t ${key}`;
  } else if (list[key] == STATUS.In_Progress) {
    GroupIn_Progress += `\n \t ${key}`;
  } else {
    Group_Done += `\n \t ${key}`; 
  }

  if(GroupTO_Do == false) {
    console.log(`Todo: \n \t -`)
  } else {
    console.log(`Todo: ${GroupTO_Do}`)
  }
  if(GroupIn_Progress == false) {
    console.log(`In Progress: \n \t -`)
  } else {
    console.log(`In Progress: ${GroupIn_Progress}`)
  }
  if(Group_Done == false) {
    console.log(`Done: \n \t -`)
  } else {
    console.log(`Done: ${Group_Done}`)
  }
}

addTask("Make To Do");
changeStatus("Make To Do", `${STATUS.In_Progress}`)

// addTask("eat")
addTask('will rest')
changeStatus("will rest", `${STATUS.Done}`)

addTask('wake up')
changeStatus('wake up', `${STATUS.Done}`)

addTask("drink water")
changeStatus("drink water", `${STATUS.In_Progress}`)


showList()


