import { allTask, PRIORITY, showList, STATUS } from './render.js'

export function addTask(newTask, priorityOfNewTask) {
    if(newTask.value.trim() != '' && allTask.findIndex(function (task) { return task.name == newTask.value; }) == -1) {
        if (priorityOfNewTask.id === PRIORITY.task_HIGH) {
            allTask.push( { name: newTask.value, status: STATUS.task_undone, priority: PRIORITY.task_HIGH } );
        } else allTask.push( { name: newTask.value, status: STATUS.task_undone, priority: PRIORITY.task_LOW } );
    };
    showList();
};
