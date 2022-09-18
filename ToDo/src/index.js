import { render } from './modules/render.js'

const high = document.querySelector('.high')
const low = document.querySelector('.low')

let todo = [
  {
    text: 'Вот вам и супер интересная тема. Вы наверняка заметили что ваши файлы с кодом становятся все объемнее, что хочется вынести некоторые вещи куда-то за пределы основной программы.',
    status: 'check',
    type: high
  },
  {
    text: 'Сверстать этот ToDo list.',
    status: 'checked',
    type: high
  },
  {
    text: 'Начать делать задачу.',
    status: 'checked',
    type: high
  },
  {
    text: 'Посмотреть ютуб.',
    status: 'check',
    type: low
  },
]

render(todo, high, low)