const STATUSES = {
    IN_PROGRESS : "In Progress",
    DONE : "Done",
    TO_DO : "To Do",
}


const LIST = { 
    "create a new practice task": STATUSES.IN_PROGRESS,
     "make a bed": STATUSES.DONE, 
     "write a post": STATUSES.TO_DO, 
    }


function changeStatus (task, status) {
    LIST[task] = status;
}


function addTask(task) {
    LIST[task] = STATUSES.TO_DO;
}


function deleteTask (task) {
    delete LIST[task];
}

function ShowList() {

    for (let key in LIST) {

       
        if(LIST[key] == STATUSES.IN_PROGRESS) {
            console.log("In Progress:  " + key);  
        } 
        
       
        if (LIST[key] == STATUSES.DONE) {
            console.log("Done:  " + key);
        }  

       
        if(LIST[key] == STATUSES.TO_DO) {
            console.log("ToDo:  " + key);
        }   
    }

}

deleteTask('have a walk');
changeStatus('write a post', STATUSES.DONE);
addTask('have a walk')
ShowList();