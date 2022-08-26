const status = {
    STATUS_IN_PROGRESS: "In Progress",
    STATUS_DONE: "Done",
    STATUS_TO_DO: "To Do",
}

const priority = {
    PRIORITY_LOW: "low",
    PRIORITY_HIGH: "high",
}

let list = [ { name: 'create a post', status: status.STATUS_IN_PROGRESS, priority: priority.PRIORITY_HIGH  },
             { name: 'test', status: status.STATUS_DONE, priority: priority.PRIORITY_LOW  } ]


function addTask (nameTask){
    list.push({name:nameTask, status: status.STATUS_TO_DO, priority: priority.PRIORITY_LOW});
}

function deleteTask(nameTask){
    let result = list.find(function(item) {
        console.log(nameTask);
        // test
        // test
        // test
    });
}


addTask("JS")
deleteTask ("test");

console.log(list);





