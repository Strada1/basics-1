export function checkInput(text) {
  return text.trim().length !== 0;
}

export function getConvertTime(time) {
  const convertTime = new Date(time * 1000);
  const hours = convertTime.getHours();
  const minutes = convertTime.getMinutes();
  return `${hours}:${minutes}`;
}

export function getConvertDate(time) {
  const convertTime = new Date(time * 1000);
  const date = convertTime.getDate();
  const month = convertTime.getMonth();
  return `${date}.${month}`;
}
