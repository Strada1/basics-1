const addBtns = document.querySelectorAll('.task-plus');
const highBlock = document.querySelector('.high-block');
const lowBlock = document.querySelector('.low-block');
const addBlock = document.querySelector('task-add-block');
const inputHighTask = document.querySelector('.high-input');
const inputLowTask = document.querySelector('.low-input');
const inputs = document.querySelectorAll('input[type = "text"]');
const form = document.querySelectorAll('form');

form.forEach(item => {
  item.addEventListener('submit', e => e.preventDefault());
});

function createTaskElem(task, priority) {
  let result = `
  <div class="new-task">
  <label class="connect">
   <input type="checkbox" class="check-box" />
   <span class="check-style"></span>
   <div class="task-text">${task.value}
   </div></label
  >
  
  <div class="task-close">
   <img src="images/close.svg" alt="" />
  </div>
  </div>`;
  return result;
}

addBtns.forEach(item => {
  item.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.classList.contains('high') && inputHighTask.value !== '') {
      highBlock.insertAdjacentHTML('afterBegin', createTaskElem(inputHighTask));
    } else if (
      e.target.classList.contains('low') &&
      inputLowTask.value !== ''
    ) {
      console.log(e.target);
      lowBlock.insertAdjacentHTML('afterBegin', createTaskElem(inputLowTask));
    }
  });
});
