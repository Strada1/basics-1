export const storageList = localStorage.getItem("newList");
export const storageCity = localStorage.getItem("cityName");

export function setLocal(item) {
  if (Array.isArray(item)) {
    localStorage.setItem("newList", JSON.stringify(item));
  } else {
    localStorage.setItem("cityName", item);
  }
}
