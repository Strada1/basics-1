import data from './data.json' assert {type: "json"};
// console.log(data.users[2]);
for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
  }