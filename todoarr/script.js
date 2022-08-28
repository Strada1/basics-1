const STATUS = {
    TODO: 'To Do',
    DONE: 'Done',
    INPROGRESS: 'In Progress',
}

const PRIORITY = {
    low: "low",
    high: "high",
}

const list = [ 
    { name: 'create a post', status: 'In progress', priority: 'low'}, 
    { name: 'test', status: 'Done', priority: 'high'  } ] ;

    
        function addTask(name, STATUS.TODO) {
            let addTask = {name, STATUS}
            list.push(addTask)
        }
        addTask()
        

        function deleteTask (name) {
            delete list[task];
            list.splice()
        }
        deleteTask()
        
        function changeStatus(name,STATUS){
            list [task] = STATUS;

        }

        function showList() {
                let statToDo = '';
                let statInPr = '';
                let statDone = '';
            
                for (let key in list) {
                   if (list[key] == 'to do') {
                    statToDo += `"${key}"\n `
                   };
            
                   if (list[key] == 'in progress') {
                    statInPr += `"${key}"\n `
                   };
            
                   if (list[key] == 'done') {
                    statDone += `"${key}"\n `
            
                   };
            
                }
            
            
                if (statToDo !== '') {
                    console.log  (`To Do:\n` + statToDo);
                } else {
                    console.log  (`To Do:\n - \n`);
                };
            
                if (statDone !== '') {
                    console.log  (`Done\n:` + statDone);
                } else {
                    console.log  (`Done:\n - \n `);
                };
            
                if (statInPr !== '') {
                    console.log  (`In Progress:\n ` + statInPr);
                } else {
                    console.log  (`In Progress:\n - \n `);
                };
            
            
                   }
            
            
            
            
            addTask('pet cat');
            addTask('walking');
            deleteTask ('work');
            changeStatus ('running', 'in progress');
            showList();


