const showVerticalMessage = (str) => {
    if (!str) return console.log("Передайте в функцию аргумент!");
    if (typeof str === "string") {
      if (str.length > 7) {
        str = str.slice(0, 7);
      }
      if (str[0] === "s") {
        str = str[0].toUpperCase() + str.slice(1);
      }
      for (let char of str) {
        console.log(char);
      }
    } else console.log("Возникла ошибка! Возможно передана не строка");
  };
  
// showVerticalMessage();
// showVerticalMessage(12);
// showVerticalMessage("Strada");
showVerticalMessage("strada");
// showVerticalMessage("qwertyuiop");
// showVerticalMessage("sqwertyuiop");