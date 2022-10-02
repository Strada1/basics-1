const ListStatuses = {
  TODO: 'To Do',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done'
};

const ListPriority = {
  HIGH: 'high',
  LOW: 'low'
};

const HIGH_PRIORITY_ADD_PLACEHOLDER = 'Добавить важных дел';

const list =  [
  {
    name: 'Посмотреть ютубчик.',
    status: ListStatuses.TODO,
    priority: ListPriority.LOW
  },
  {
    name: 'Вот вам и супер интересная тема. Вы наверняка заметили что ваши файлы с кодом становятся все объемнее, что хочется вынести некоторые вещи куда-то за пределы основной программы.',
    status: ListStatuses.TODO,
    priority: ListPriority.HIGH
  },
  {
    name: 'Сверстать этот TODO list.',
    status: ListStatuses.TODO,
    priority: ListPriority.HIGH
  },
  {
    name: 'Почитать немного.',
    status: ListStatuses.TODO,
    priority: ListPriority.LOW
  },
  {
    name: 'Начать делать задачу.',
    status: ListStatuses.TODO,
    priority: ListPriority.HIGH
  },
  {
    name: 'Погулять.',
    status: ListStatuses.DONE,
    priority: ListPriority.LOW
  }
];

export { list, ListStatuses, ListPriority, HIGH_PRIORITY_ADD_PLACEHOLDER };
