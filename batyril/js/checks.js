export function checkInput(text) {
  return text.trim().length !== 0;
}

export function getConvertTime(time) {
  const convertTime = new Date(time * 1000);
  const hours = convertTime.getHours();
  let minutes = convertTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

export function getConvertDate(time) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const convertTime = new Date(time * 1000);
  const date = convertTime.getDate();
  const month = months[convertTime.getMonth()];
  return `${date} ${month}`;
}

export function getNowDate() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(Date.now());
  const day = date.getDate();
  const month = months[date.getMonth()];
  const hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return [day, month, hours, minutes];
}
