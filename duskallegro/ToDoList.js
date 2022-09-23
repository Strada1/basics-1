const list = {
    obligatory: ["Todo", "In Progress", "Done"],

    changeStatus: function(task, progress)  {
        if (this.hasTask(task))  {
            this[task] = progress;
            return true;
        }

        return false;
    },
    addTask: function(task)  {
        if (this.hasTask(task))  {
            // can't add duplicate task
            return false;
        }

        this[task] = "Todo";
    },
    deleteTask: function(task)  {
        if (this.hasTask(task))  {
            delete this[task];
            return true;
        }

        return false;
    },
    showList: function()  {
        let printed = [];
        for (const [key, value] of Object.entries(this))  {
            if (value instanceof Function)  {
                continue;
            }

            if (!(printed.includes(value)))  {
                printed.push(value);
                this.showTasks(value);
            }
        }

        this.obligatory.forEach((o) =>  {
           if (!printed.includes(o))  {
               console.log(o + ":");
               console.log("   -");
           }
        });
    },
    showTasks: function(progress)  {
        console.log(progress + ":");
        for (const [key, value] of Object.entries(this))  {
            if (value === progress)  {
                console.log("   \"" + key + "\"" + ",");
            }
        }
    },
    hasTask: function (task)  {
        return this.hasOwnProperty(task);
    }
}

list.showList();
console.log("--------------------");

list.addTask("create a new practice task");
list.showList();
console.log("--------------------");

list.addTask("make a bed");
list.showList();
console.log("--------------------");

list.addTask("write a post");
list.showList();
console.log("--------------------");

list.changeStatus("create a new practice task", "Todo");
list.changeStatus("make a bed", "Todo");
list.changeStatus("write a post", "In Progress");
list.showList();
console.log("--------------------");

list.deleteTask("idk");
list.showList();
console.log("--------------------");

list.deleteTask("write a post");
list.showList();
console.log("--------------------");
