export const TASK_PRIORITY = {
  LOW: 'low',
  HIGH: 'high',
}

const TASK_STATUS = {
  DONE: 'Done',
  IN_PROGRESS: 'In Progress',
};

export const DB_TASKS = [{ task: 'did to do', status: 'In Progress', priority: 'high' },
  { task: 'did to 234do', status: 'In Progress', priority: 'high' },
  { task: 'did to4do', status: 'In Progress', priority: 'high' },
  { task: 'did to423 do', status: 'In Progress', priority: 'high' },
  { task: 'go to walk', status: 'In Progress', priority: 'low' }];

export function addTaskDB(db,
                          task,
                          priority = TASK_PRIORITY.LOW,
                          status = TASK_STATUS.IN_PROGRESS,) {
  db.push({task: task, status: status, priority: priority})}

export function deleteTaskDB(db, task) {
  const indexTask = db.findIndex((item) => item.task === task);
  if (indexTask !== -1) {
    db.splice(indexTask, 1);
  }
}

export function changeStatus(db, task, status = TASK_STATUS.DONE ) {
  const indexTask = db.findIndex((item) => item.task === task);
  if (indexTask !== -1 && db[indexTask].status !== TASK_STATUS.DONE) {
    db[indexTask].status = status;
  } else {
    db[indexTask].status = TASK_STATUS.IN_PROGRESS;
  }
}
