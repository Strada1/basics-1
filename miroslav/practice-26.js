const list = [
    { name: "create a post", status: "In progress", priority: "low" },
    { name: "test", status: "Done", priority: "high" },
];

function changeStatus(name, status) {
    list.map((task) =>
        task.name === name && task.name
            ? (task.status = status)
            : console.log("Try again")
    );
}

function changePriority(name, priority) {
    list.map((task) =>
        task.name === name
            ? (task.priority = priority)
            : console.log("Try again")
    );
}

function addTask(name, status = "In progress", priority = "low") {
    name
        ? list.push({ name: name, status: status, priority: priority })
        : console.log("Try again");
}

function deleteTasks(name) {
    list.map((task, index) =>
        task.name === name ? list.splice(index, 1) : console.log("Try again")
    );
}

function showList() {
    const names = list.map((task) => task.name);
    const status = list.map((task) => task.status);
    const priority = list.map((task) => task.priority);
    console.log(
        `Names:\n ${names}\nStatus:\n${status}\nPriority:\n${priority}`
    );
}

changeStatus("create a post", "Done");
changePriority("create a post", "high");
addTask("do some", "Done", "high");
console.log(list);
deleteTasks("do some");
console.log(list);
showList();
