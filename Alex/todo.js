const statusTask = {
    inProgress: 'In progress',
    done: 'Done',
    toDo: 'To Do',
}

const list = {
	'погулять': statusTask.inProgress,
	'покормить': statusTask.done,
	'поучиться': statusTask.toDo,
}

 function changeStasus (task, status) {
    list [task] = status;
 }
    changeStasus = ('покормить', 'To Do');

    function addTask (newTask) {
        list[newTask] = statusTask.toDo;
    }

    addTask ('сходить в зал');

    function delTask (del_Task) {
        delete list [del_Task];

    }
    delTask ('сходить в зал');
  
    function showList () {
        console.log('To Do :');
        for (let key in list) {
            if ( list [key] === 'To Do')
            console.log(key);
        }
        console.log('Done :');
        for (let key in list) {
            if (list [key] === 'Done')
            console.log(key);
        }
        console.log('In Progress');
        for ( let key in list) {
            if ( list [key] === 'In progress')
            console.log(key);
        }
    }
    showList ();