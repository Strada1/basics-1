import data from './data.json' assert {type: "json"};

for (let user of data['users']) {
    let str = '';
    for (let key in user) {
        if (key == 'dateOfBirth') {
            str += ' born at'
        }
        str += ` ${user[key]},`
    }
    console.log(str)
}