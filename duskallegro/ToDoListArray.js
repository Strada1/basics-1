// Task 26

const list = {
    obligatory: ["Todo", "In Progress", "Done"],
    tasks: [],
    countTasks: 0,

    changePriority: function (task, priority) {
      if (this.hasTask(task))  {
          for (let i = 0; i < this.tasks.length; i++) {
              if (this.tasks[i].name === task)  {
                  this.tasks[i].priority = priority;
                  return true;
              }
          }
      }

      return false;
    },

    changeStatus: function(task, progress)  {
        let result = false;

        if (this.hasTask(task))  {
            this.tasks.forEach(t =>  {
              if (t.name === task)  {
                  t.status = progress;
                  result = true;
              }
            })

            return result;
        }

        return false;
    },
    addTask: function(task, priority = 'low')  {
        if (this.hasTask(task))  {
            // can't add duplicate task
            return false;
        }

        this.tasks[this.countTasks++] = {name: task, status: "Todo", priority: priority};
    },
    deleteTask: function(task)  {
        if (this.hasTask(task))  {
            let index = this.tasks.indexOf(task);
            this.tasks.splice(index, 1);
            return true;
        }

        return false;
    },
    showList: function()  {
        let printed = [];
        for (const task of this.tasks)  {
            let taskStatus = task.status;

            if (!(printed.includes(taskStatus)))  {
                printed.push(taskStatus);
                this.showTasks(taskStatus);
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
        for (const task of this.tasks)  {
            if (task.status === progress)  {
                console.log("   \"" + task.name + ` (${task.priority})` + "\"" + ",");
            }
        }
    },
    hasTask: function (taskName)  {
        return this.tasks.some((task) => task.name === taskName);
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

list.changePriority("make a bed", "high");
list.showList();
console.log("--------------------");