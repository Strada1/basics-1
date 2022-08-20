const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",

    changeStatus(key, keyStatus) {
        list[key] = keyStatus;
    },
    
    addTask(key) {
        list[key] = "To Do";
    },
    
    deleteTask(key) {
        delete list[key];
    },
    
    showList() {
        console.log('Todo:')
        for (key in list) {
            if (list[key] === 'To Do') {
                console.log('\t' + key);
            }
        }
        console.log('In Progress:');
        for (key in list) {
            if (list[key] === 'In Progress') {
                console.log('\t' + key);
            }
        }
        console.log('Done:');
        for (key in list) {
            if (list[key] === 'Done') {
                console.log('\t' + key);
            }
        }
    },
    
}

list.changeStatus("write a post", "Done");
list.addTask("lern JS");
list.addTask('have a walk');
list.deleteTask("have a walk");
list.showList();
