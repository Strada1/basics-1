document.querySelector('.high-form').addEventListener('submit', addTask);
document.querySelector('.low-form').addEventListener('submit', addTask)


function addTask(event) {
  event.preventDefault();
  const currentForm = event.currentTarget;
  const newTask = (currentForm.nextElementSibling).cloneNode(true);
  newTask.lastElementChild.textContent = currentForm.lastElementChild.value;
  currentForm.after(newTask);
  currentForm.lastElementChild.value = '';
}
