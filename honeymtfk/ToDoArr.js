const list = [{ name: "Make some js work", status: "To Do", priorety: "Middle" },
{ name: "Make some HTML/CSS work", status: "In progress", priorety: "Low" },
{ name: "Make some Strada work", status: "Done", priorety: "High" }];

function newTask(array, name, status, priorety) {
	if (array == list) {
		list.push({ name: name, status: status, priorety: priorety });
	} else {
		console.log("Ошибка!");
	}
}

function deleteTask(task) {
	list.splice(task);
}

function changeStatus(taskName, newStatus) {
    let task = list.find(item => item.name == taskName)
    if (list.includes(task)) {
        task.status = newStatus;
    } else {
        console.log ('Задача отсутсвует или указана некорректно');
    }
}

function showList() {
	let toDoItem = list.filter(item => item.status == "To Do");
	let inProgressItem = list.filter(item => item.status == "In progress");
	let doneItem = list.filter(item => item.status == "Done");
	console.log("To Do:");
	console.log(toDoItem);
	console.log("In progress:");
	console.log(inProgressItem);
	console.log("Done:");
	console.log(doneItem);
}

newTask(list, "Add new task", "To Do", "High");
deleteTask(2);
newTask(list, "Add another new task", "Done", "High");
changeStatus("Make some js work", "In progress");
newTask(list, "Relax", "To Do", "High");
showList();