function showVerticalMessage(message) {
  message = message[0].toUpperCase() + message.slice(1, 6);

  for (word of message) {
    console.log(word);
  }
}

showVerticalMessage("stradanie");
