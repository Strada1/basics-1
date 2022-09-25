const items = document.querySelectorAll(".weather__item");
const links = document.querySelectorAll(".weather__link");
let cl = false;
links.forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    link(element);
  });
});
function link(el) {
  if (el.dataset.id) {
    items.forEach(function (item) {
      if (el.dataset.id === item.getAttribute("id")) {
        item.classList.add("active");
        links.forEach((elem) => elem.classList.remove("active"));
        el.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
}
