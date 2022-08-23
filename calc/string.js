function showVerticalMessage(str) {
  str = str.substring(0, 7);
  for (let elements of str) console.log(elements);

  if (str[0] === "s") {
    str = str[0].toUpperCase() + str.slice(1);
    for (let elements of str) console.log(elements);
  }
}
showVerticalMessage("affrfst  ");
