import data from './data.json';
let strData = JSON.stringify(data);
let arrayData = JSON.parse(strData).users;
arrayData.forEach((element) => {
  console.log(
    `${element.firstName} ${element.lastName}, ${element.dateOfBirth} ${element.knowsAs}`,
  );
});
