export const TASK_PRIORITY = {
  LOW: 'low',
  HIGH: 'high',
}

const TASK_STATUS = {
  DONE: 'Done',
  IN_PROGRESS: 'In Progress',
};

export const DB_TASKS = [{ task: 'did to do', status: 'In Progress', priority: 'high' },
  { task: 'go to walk', status: 'In Progress', priority: 'low' }];

export function addTaskDB(db,
                          task,
                          priority = TASK_PRIORITY.LOW,
                          status = TASK_STATUS.IN_PROGRESS,) {
  db.push({task: task, status: status, priority: priority})}

