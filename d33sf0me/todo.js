const TODOlist = {
    "Check lil sister": "In Progress",
    "Call to Mom": "Done",
    "Write a post": "To Do"
};

function changeStatus(task, status) {
    TODOlist[task] = status;
};

function addTask(task) {
    TODOlist[task] = "To Do";
};

function deleteTask(task) {
    delete TODOlist[task];
};

function showList() {
    let counter = 0;
    console.log('\nTo Do: ');
    for (key in TODOlist) {
        if (TODOlist[key] == 'To Do') {
            console.log(`\t${key}`);
            counter += 1;
        } 
    } if (counter == 0) { console.log('\t-'); };
    counter = 0;
    console.log('\nIn Progress: ');
    for (key in TODOlist) {
        if (TODOlist[key] == 'In Progress') {
             console.log(`\t${key}`);
             counter += 1;
        }
    } if (counter == 0) { console.log('\t-'); };
    counter = 0;
    console.log('\nDone: ');
    for (key in TODOlist) {
        if (TODOlist[key] == 'Done') {
            console.log(`\t${key}`);
            counter += 1;
        }
    } if (counter == 0) { console.log('\t-'); };
};

changeStatus("Write a post", "In Progress");
addTask("Have a walk");
//addTask("Buy new phone");
//changeStatus("Buy new phone", "Done");
deleteTask("Call to Mom");
showList()