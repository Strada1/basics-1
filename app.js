const ulHigh = document.querySelector('.ul-high')
const ulLow = document.querySelector('.ul-low')

const formHigh = document.querySelector('.form-high')
const formLow = document.querySelector('.form-low')

const inputHigh = document.querySelector('#add-task-high')
const inputLow = document.querySelector('#add-task-low')

function add(newTask, list) {
  list.insertAdjacentHTML(
    'beforeend',
    `<li class="task">
  <input type="checkbox" id="todo-high-${list.children.length + 1}" />
    <label for="todo-high-${list.children.length + 1}">
      ${newTask.value}
    </label>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="-0.5"
        x2="18.0096"
        y2="-0.5"
        transform="matrix(0.999988 -0.00481873 0.0748716 0.997193 1 10)"
        stroke="#998899"
      />
      <line
        y1="-0.5"
        x2="18.0401"
        y2="-0.5"
        transform="matrix(-0.0192905 -0.999814 0.998699 0.0509976 10.5404 18.8444)"
        stroke="#998899"
      />
    </svg>
  </li>
  `,
  )
}

formHigh.addEventListener('submit', (e) => {
  e.preventDefault()
  add(inputHigh, ulHigh)
  // console.dir(ulHigh.children.length)
})
