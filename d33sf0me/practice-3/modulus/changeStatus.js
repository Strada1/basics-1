import { allTask, STATUS, showList } from './render.js'

export function changeStatus(task_name) {
    for (let task of allTask) {
        if (task.name === task_name) {
            if (checkbox.checked) {
                task.status = STATUS.DONE;
            } else task.status = STATUS.TO_DO;  
        };
    } ;
    showList();
};