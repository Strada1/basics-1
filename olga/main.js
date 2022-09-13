const STATUS = {
  TO_DO: "To Do",
  DONE: "Done",
  iN_PROGRESS: "In Progress",
};
const PRIORITY = {
  low: "low",
  high: "high",
};
const list = [];

function addTask(task, priority) {
  list.push({ name: task, status: STATUS.TO_DO, priority });
}
addTask("to walk", PRIORITY.high);
addTask("to swim", PRIORITY.low);
addTask("to read", PRIORITY.high);

function deleteTask(task) {
  list.forEach(function (item, index) {
    if (item.name == task) {
      return list.splice(index, 1);
    }
  });
}
deleteTask("to swim");

function changeStatus(task, status) {
  list.filter(function (item) {
    if (item.name == task) {
      return (item.status = status);
    }
  });
}
changeStatus("to walk", STATUS.DONE);
changeStatus("to swim", STATUS.DONE);

function showList() {
  list.forEach(function (item) {
    for (let key in item) {
      for (let keys in STATUS) {
        if (item[key] == STATUS[keys]) {
          //   console.log(STATUS[keys] + ":" + "\n" + item.name);
          delete STATUS[keys];
        }
      }
    }
  });
  for (let el in STATUS) {
    // console.log(STATUS[el] + "\n" + "-");
  }
}
function proirityStatus(task, priority) {
  let result = list.findIndex(function (item) {
    if (item.name == task) {
      //   console.log(item);
      return item.name;
    }
  });
  //   console.log(result);

  if (result != -1) {
    list[result].priority = priority;
  }
}
proirityStatus("to read", PRIORITY.low);
showList();

const buttonAddTask = document.querySelectorAll(".button__add");
let id = 1;
for (let i = 0; i < buttonAddTask.length; i++) {
  buttonAddTask[i].addEventListener("click", function (e) {
    e.preventDefault();
    let input = this.parentElement.querySelector(".todo__add--task");
    if (input.value != "") {
      input.parentElement.parentElement.append(createTask(input.value));
      addTask(input.value);
    }
  });
}

function createTask(value) {
  let div = document.createElement("div");
  div.classList.add("todo__item--task");
  div.classList.add("todo_input");
  div.innerHTML = `
<input type="checkbox" id="task_${id}" class="todo__task" />${value}
<label for="task_${id}"></label>
<button class="button">
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      y1="-0.5"
      x2="20.7803"
      y2="-0.5"
      transform="matrix(0.710506 0.703691 -0.65218 0.758064 1 1)"
      stroke="#998899"
    />
    <line
      y1="-0.5"
      x2="20.8155"
      y2="-0.5"
      transform="matrix(0.693335 -0.720616 0.670126 0.742247 1.56787 16)"
      stroke="#998899"
    />
  </svg>
</button>
`;
  id++;
  return div;
}
