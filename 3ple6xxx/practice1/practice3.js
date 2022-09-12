function showVerticalMessage(str) {
  if (str[0] === "s") str = str[0].toUpperCase() + str.slice(1);

  str = str.slice(0, 7);

  for (let item of str) {
    console.log(item);
  }
}
showVerticalMessage("strada");
showVerticalMessage("gsakjaklsgflahghdl");