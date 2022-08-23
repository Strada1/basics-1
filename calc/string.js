function showVerticalMessage(str) {
  str = str.substring(0, 7);

  if (str[0] === "s") {
    str = str[0].toUpperCase() + str.slice(1);
    for (let elements of str) console.log(elements);
  } else {
    for (let elements of str) console.log(elements);
  }
}
showVerticalMessage("stradaaaaaa");
