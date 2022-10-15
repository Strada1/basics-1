export const toggleTags = () => {
  const container = document.querySelector(`.js-form`);
  const radioElements = container.querySelectorAll(`.js-radios`);
  const nowContent = container.querySelector(`.js-now`);
  const detailsContent = container.querySelector(`.js-details`);
  const forecastContent = container.querySelector(`.js-forecast`);

  radioElements.forEach((radioElement) => {
    function onRadioChange() {
      switch (radioElement.value) {
        case `1`:
          detailsContent.style.display = `none`;
          forecastContent.style.display = `none`;
          nowContent.style.display = `grid`;
          break;
        case `2`:
          detailsContent.style.display = `block`;
          forecastContent.style.display = `none`;
          nowContent.style.display = `none`;
          break;
        case `3`:
          detailsContent.style.display = `none`;
          forecastContent.style.display = `block`;
          nowContent.style.display = `none`;
          break;
        default:
          console.log(`error`);
          break;
      }
    }

    radioElement.addEventListener(`change`, onRadioChange);
  });
};
