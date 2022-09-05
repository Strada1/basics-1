const statusTask = {
    inProgress: "In Progress",
	done: "Done",
	toDO: "To Do",
};

const DEFAULT_STATUS = statusTask.toDO;

const priorities = {
    HIGHT: 'hight',
    LOW : 'low',
};

const DEFAULT_PRIORITY = priorities.LOW;

const list = [
	{name: 'пойти погулять', status: statusTask.toDO, priority:  priorities.LOW },	
	{name:'помыть посуду', status: statusTask.inProgress, priority: priorities.HIGHT},
    {name:'накормить пса', status: statusTask.done, priority: priorities.HIGHT},
   ];

function checkTask (name){
    return list.find (function(task){
        return task.name === name;
    })
}

   function changeStatus (name,status) {
    const newStatus = checkTask(name);
   
    if (newStatus){
        newStatus.status=status;
    } else {
        return 'Ошибка: задава не найдена';
    }
   }

function addTask (name) {
    const newTask = { name: name, status: DEFAULT_STATUS, priority: DEFAULT_PRIORITY};

    const task = checkTask(name);

    if (task) {
        return 'Ошибка - такая задача уже есть';
        } else {
            list.push (newTask);
        }
}

function changePriority(name,priority) {
    const newPriority = checkTask(name);

    if (newPriority) {
        newPriority.priority = priority;
    } else {
        return 'Ошибка - задача не найдена';
    }
}

function deleteTask(name) {
    const delTask = list.findIndex(function(item){
        return item.name === name;
    });

    if (delTask >=0) {
list.splice(delTask, 1);
    } else {
        return 'Ошибка - задача не найдена';
    }
}

function showList (type) {
    if (type === 'status') {
        for ( let status in statusTask) {
            console.log(statusTask[status] + ':');
            const statusList = list.filter(function(task) {
                if (task.status === statusTask[status]) {
                    console.log(`\t'${task.name}'`);
                } else if (!task.status === statusTask[status]) {
                    console.log('\t-');
                }
            })

            if (!statusList) return 'Ошибка';

        }
    }

if (type === 'priority') {
    for (let priority in priorities) {
        console.log(priorities[priority] + ':');
        const priorityList = list.filter(function (task) {
            if (task.priority === priorities[priority]) {
                console.log(`\t'${task.name}'`);
            } else if (!task.priority === priorities[priority]) {
                console.log('\t-');
            }
        })

        if (!priorityList) return 'Error';
    }
}
}
addTask ('вычесать пса');
addTask ('сделать отчет');

changeStatus ('пойти погулять', statusTask.DONE);

changePriority ('помыть посуду', priorities.LOW);

deleteTask ('помыть посуду');
showList('status');
showList('priority');
console.log(list);