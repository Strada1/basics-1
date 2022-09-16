import data from './data.json' assert { type: 'json' };
console.log(
	`${data.users[0].firstName} ${data.users[0].lastName}, born at ${data.users[0].dateOfBirth} and ${data.users[0].knowsAs}`
);
/* 
Dennis Ritchie, born at September 9, 1941 and created the C programming language
*/
