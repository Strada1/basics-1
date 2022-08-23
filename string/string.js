function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(ucFirst("вася"));

function checkSpam(str) {
  const subStrV = "viagra";
  const subStrX = "xxx";
  let lowSrt = str.toLowerCase();
  return lowSrt.includes(subStrV) || lowSrt.includes(subStrX);
}
console.log(checkSpam("dfXxXdf"));

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "...";
  }
  return str;
}
console.log(truncate("asdf asdf asdf", 4));

function showVerticalMessage(str) {
  const maxlength = 7;
  if (str.charAt(0).toLowerCase() === "s")
    str = str.charAt(0).toUpperCase() + str.slice(1);
  for (let i = 0; i < maxlength; i++) {
    console.log(str[i]);
  }
}
showVerticalMessage("stra1236");
