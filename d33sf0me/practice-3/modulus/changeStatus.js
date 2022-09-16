import { allTask, STATUS, showList } from './render.js'

export function changeStatus(task_name) {
    for (let task of allTask) {
        if (task.name === task_name.trim()) {
            if (task.status === STATUS.task_undone) {
                task.status = STATUS.task_done;
            } else task.status = STATUS.task_undone;
        };
    };
    showList();
};