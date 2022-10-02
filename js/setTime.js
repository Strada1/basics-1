export function cityTime(dayTime, currentTimeZone) {
  let localDate =
    dayTime * 1000 +
    new Date(dayTime * 1000).getTimezoneOffset() * 60000 +
    currentTimeZone * 1000;
  const date = new Date(localDate).toLocaleTimeString();
  let localTime = date.replace(/:\d\d$/, "");
  return localTime;
}
