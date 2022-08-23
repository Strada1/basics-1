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

    console.log("In Progress:  ");

        for (let key in LIST) {

            if(LIST[key] == STATUSES.IN_PROGRESS) {
                console.log(key);  
            } 
        }
            
     


    console.log("Done:  ");

        for (let key in LIST) {

            if (LIST[key] == STATUSES.DONE) {
                console.log(key);
            }  
        }
        // console.log('-');


    console.log("ToDo:  ");

        for (let key in LIST) {

            if(LIST[key] == STATUSES.TO_DO) {
                console.log(key);
            }   
        }
        // console.log('-');
}



deleteTask('have a walk');
changeStatus('write a post', STATUSES.DONE);
addTask('have a walk')


ShowList();