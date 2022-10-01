document.querySelectorAll('.tabs-triggers__item').forEach((item) => item.addEventListener('click', (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('href').replace('#', '');
  document.querySelectorAll('.tabs-triggers__item').forEach((child) => child.classList.remove('tabs-triggers__item_active'));
  document.querySelectorAll('.tabs-content__item').forEach((child) => child.classList.remove('tabs-content__item_active'));

  item.classList.add('tabs-triggers__item_active');
  document.getElementById(id).classList.add('tabs-content__item_active');
}));

document.querySelector('.tabs-triggers__item').click();
