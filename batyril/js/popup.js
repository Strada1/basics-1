export function openPopup(popup, errorMessage) {
  popup.style.opacity = '1';
  popup.style.visibility = 'visible';
  const uiText = popup.querySelector('.popup__warning-text');
  uiText.textContent = errorMessage;
}
export function closePopup(popup) {
  popup.style.opacity = '0';
  popup.style.visibility = 'hidden';
}
