export function removeResult(results) {
  for (let result of results) {
    result.onclick = function () {
      result.remove();
    }
  }
}