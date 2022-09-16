import data from './data.json' assert { type: "json" };

data.users.forEach(user => console.log(`${user.firstName} born ${user.dateOfBirth}, and ${user.knowsAs}`))
