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

function id() {
  for (let i = 0; i < todo.length; i++) {
    todo[i].id = i
  }
}

function addTask(form, type, status) {
  try {
    if (form[0].value) {
      let text = form[0].value
      todo.push({
        text: text,
        status: status,
        type: type,
      })
    } else {
      throw new Error('Нельзя добавлять пустые задачи')
    }
  } catch(error) {
    alert(error.message)
  }
}

function render() {
  let sumHigh = `<h1>HIGH</h1>
  <div class="create">
    <form class="formHigh">
      <input type="text" placeholder="Добавь своё важное дело"/>
      <svg class="add high" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="-0.5" x2="18.0096" y2="-0.5" transform="matrix(0.999988 -0.00481873 0.0748716 0.997193 1 10)" stroke="#998899"/>
        <line y1="-0.5" x2="18.0401" y2="-0.5" transform="matrix(-0.0192905 -0.999814 0.998699 0.0509976 10.5404 18.8444)" stroke="#998899"/>
      </svg>
    </form>
  </div>`;
  let sumLow = `<h1>LOW</h1>
  <div class="create">
    <form class="formLow">
    <input type="text" placeholder="Добавь своё дело"/>
    <svg class="add low" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="-0.5" x2="18.0096" y2="-0.5" transform="matrix(0.999988 -0.00481873 0.0748716 0.997193 1 10)" stroke="#998899"/>
      <line y1="-0.5" x2="18.0401" y2="-0.5" transform="matrix(-0.0192905 -0.999814 0.998699 0.0509976 10.5404 18.8444)" stroke="#998899"/>
    </svg>
    </form>
  </div>`;

  id()

  try {
    for (let task of todo) {
      let text = task.text
      let status = task.status
      let type = task.type
      
      if (type === high) {
        sumHigh += `<div id=${task.id} class='task ${status === 'check' ? '' : 'done'}'>
        <svg class=${status} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10.5" cy="10.5" r="10" stroke="#998899"/>
        </svg>  
        <p class='text'>${text}</p>
        <svg class="xmark" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="-0.5" x2="20.7803" y2="-0.5" transform="matrix(0.710506 0.703691 -0.65218 0.758064 1 1)" stroke="#998899"/>
          <line y1="-0.5" x2="20.8155" y2="-0.5" transform="matrix(0.693335 -0.720616 0.670126 0.742247 1.56787 16)" stroke="#998899"/>
        </svg>      
      </div>`
      } else if (type === low) {
        sumLow += `<div id=${task.id} class='task ${status === 'check' ? '' : 'done'}'>
          <svg class=${status} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.5" cy="10.5" r="10" stroke="#998899"/>
          </svg>  
          <p class='text'>${text}</p>
          <svg class="xmark" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-0.5" x2="20.7803" y2="-0.5" transform="matrix(0.710506 0.703691 -0.65218 0.758064 1 1)" stroke="#998899"/>
            <line y1="-0.5" x2="20.8155" y2="-0.5" transform="matrix(0.693335 -0.720616 0.670126 0.742247 1.56787 16)" stroke="#998899"/>
          </svg>      
        </div>`
      }
    }
  } catch(error) {
    alert(error.message)
  }

  high.innerHTML = sumHigh
  low.innerHTML = sumLow

  let adds = document.querySelectorAll('.add')
  let tasks = document.querySelectorAll('.task')
  let forms = document.querySelectorAll('form')

  for (let form of forms) {
    form.addEventListener('submit', (event) => {
      try {
        event.preventDefault()
        if (form.className.includes('formHigh')) {
          addTask(form, high, 'check')
          render()
        } else if (form.className.includes('formLow')) {
          addTask(form, low, 'check')
          render()
        } else {
          throw new Error ('Неизвестная форма')
        }
      } catch(error) {
        alert(error.message)
      }
    })
  }
  
  for (let add of adds) {
    add.addEventListener('click', () => {
      try {
        if (add.classList.value.includes('high')) {
          addTask(forms[0], high, 'check')
          render()
        } else if (add.classList.value.includes('low')) {
          addTask(forms[1], low, 'check')
          render()
        } else {
          throw new Error('Неизвестная форма')
        }
      } catch(error) {
        alert(error.message)
      }
    })
  }

  for (let task of tasks) {
    task.addEventListener('click', (event) => {
      try {
        if (event.target.classList.value === 'xmark' || event.target.tagName === 'line') {
          todo.splice(Number(task.id), 1)
          render()
        } else if (event.target.classList.value === 'check') {
          event.target.classList.value = 'checked'
          task.classList.value = 'task done'
          todo[task.id].status = 'checked'
        } else if (event.target.classList.value === 'checked') {
          event.target.classList.value = 'check'
          task.classList.value = 'task'
          todo[task.id].status = 'check'
        } else if (event.target.tagName === 'P' || event.target.tagName === 'DIV') {
          return 
        } else {
          throw new Error ('Не удалось провзаимодействовать с задачей')
        }
      } catch(error) {
        alert(error.message)
      }
    })
  }
}

render()