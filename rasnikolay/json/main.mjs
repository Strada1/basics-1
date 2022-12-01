import data from './data.json' assert { type: 'json' };

data.users.forEach((item, index) => {
    console.log(`${item.firstName} имеет позицию ${index}`);
});

// for (let user of data.users){
//     console.log(`${user.firstName} ${user.lastName}, born on ${user.dateOfBirth}. He's ${user.knowsAs}.`);
// }

