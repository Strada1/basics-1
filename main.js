const ELEMENTS = {
  FORM: document.querySelectorAll('.todo__add'),
  ADD_INPUT: document.querySelector('.todo__add-input'),
  ADD_BTN: document.querySelectorAll('.todo__add-btn'),
};
ELEMENTS.ADD_BTN.addEventListener('click', function () {
  ELEMENTS.FORM.onsubmit = function () {
    let task = ELEMENTS.ADD_INPUT.value;
    if (task === '') return false;
    addTask(task);
  };
});

function addTask(task) {
  ELEMENTS.FORM.insertAdjacentHTML(
    'afterend',
    `<div class="todo__task">
  <div class="todo__task-content">
    <label  class="todo__task-text"> 
      <input type="checkbox" id="high__task1" class="todo__task-checkbox" />
      <span class="todo__name">
        ${task}
      </span>
    </label> 
  </div>
  <button class="todo__icon-delete">
    <img src="../img/delete-icon.svg" alt="icon" />
  </button>
</div>`,
  );
}
