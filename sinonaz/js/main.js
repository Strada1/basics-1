const forms = document.querySelectorAll(`.js-form`);

if (forms.length) {
  forms.forEach((form) => {
    const input = form.querySelector(`.js-input`);
    const taskList = form.querySelector(`.js-list`);

    function addTask(event) {
      let taskName = input.value;
      taskList.insertAdjacentHTML(
        `beforeend`,
        ` <li class="todo__item">
            <label class="todo__label todo__label--task">
              <input class="todo__input" type="checkbox" name="task">
              <span class="todo__name">${taskName}</span>
              <button class="todo__button todo__button--remove"></button>
            </label>
          </li>`
      );
      event.preventDefault();
    }

    form.addEventListener(`submit`, addTask);
  });
}
