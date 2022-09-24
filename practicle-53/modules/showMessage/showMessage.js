const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close');
const popupTitle = document.querySelector('.popup__title');
const popupText = document.querySelector('.popup__text');

// POPUPS ------------------------------------------------------------

popupCloseBtn.addEventListener('click', () => {
   popup.classList.remove('open');
})

function popupMessage(message, titlePopup = null) {
   try {
      if (titlePopup) {
         popupTitle.textContent = titlePopup;
      }
      popupText.textContent = message;
      popup.classList.add('open');
   } catch (error) {
      popupMessage(error.message, error.name);
   }
}

export { popupMessage }