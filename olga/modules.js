const resultElement = document.querySelector(".calculate__result");
export function createEl(totalValue) {
  let div = document.createElement("div");
  div.className = "total";
  resultElement.append(div);
  div.textContent = totalValue;
  div.addEventListener("click", function () {
    div.remove();
  });
}
