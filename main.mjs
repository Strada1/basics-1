import data from './data.json' assert { type: 'json' };


let string = "Users first names:";
for (let user of data.users){
    string += " " + user.firstName;
} 
console.log(string+'.');
console.log("======================================================")
for (let user of data.users){
    console.log(`${user.firstName} ${user.lastName}, born on ${user.dateOfBirth}. He's ${user.knowsAs}.`);
}