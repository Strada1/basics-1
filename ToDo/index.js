const forms = document.querySelectorAll('form')
const high = document.querySelector('.high')
const low = document.querySelector('.low')

function addTask(form, type) {
  let text = form[0].value
  type.insertAdjacentHTML(
    'beforeend',
    `<div class="task">
      <svg class="check" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10.5" cy="10.5" r="10" stroke="#998899"/>
      </svg>  
      <p>${text}</p>
      <svg class="xmark" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="-0.5" x2="20.7803" y2="-0.5" transform="matrix(0.710506 0.703691 -0.65218 0.758064 1 1)" stroke="#998899"/>
        <line y1="-0.5" x2="20.8155" y2="-0.5" transform="matrix(0.693335 -0.720616 0.670126 0.742247 1.56787 16)" stroke="#998899"/>
      </svg>      
    </div>`
  )
}

for (let form of forms) {
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (form.className.includes('formHigh')) {
      addTask(form, high)
    }
    if (form.className.includes('formLow')) {
      addTask(form, low)
    }
  })
}