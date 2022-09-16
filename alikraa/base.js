export const STATUSES = {
    TO_DO: 'To Do',
    DONE: 'Done'
}

export const DEFAULT_STATUS = STATUSES.TO_DO;

export const PRIORITIES = {
    HIGH: 'high',
    LOW: 'low'
}

export const list = [
    { name: 'Начать делать задачу', status: STATUSES.TO_DO, priority: PRIORITIES.HIGH },
    { name: 'Сверстать этот TODO list', status: STATUSES.TO_DO, priority: PRIORITIES.HIGH },
    { name: 'Почитать книгу', status: STATUSES.TO_DO, priority: PRIORITIES.LOW }
]

export function checkTask(name) {
    return list.find(function (task) {
        return task.name === name;
    })
}