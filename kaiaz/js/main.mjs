import data from "./data.json" assert { type: "json" };

let newUserStr = JSON.stringify(data, null, 2);

let newUserParseMessage = JSON.parse(newUserStr, function (key, value) {
  console.log(`The ${key} of this fucking dude ${value}`);
});

console.log(newUserParseMessage);
