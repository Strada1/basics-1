const btn_like = document.querySelector('#btn_like');
const like = document.querySelector('#like');

btn_like.addEventListener('click', () => {
  like.classList.add('like_active');
})