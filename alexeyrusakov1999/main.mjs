import data from "./data.json" assert { type: "json" };

console.log(data);

JSON.stringify(data);

for (let i = 0; i < data.users.length - 1; i++) {
  console.log(
    `${data.users[i].firstName} ${data.users[i].lastName} born at ${data.users[i].dateOfBirth} and famous as ${data.users[i].knowsAs}`
  );
}
