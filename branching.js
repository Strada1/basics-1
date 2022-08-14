
let userLogin = prompt('Who is there?')

if (userLogin === '' || userLogin === null ) {
    alert('Cancel')
} else if (userLogin === 'Admin') {
    let userPass = prompt('Password')
    if (userPass === '' || userPass === null) {
        alert('You\'re spy!!!')
    } else if ( userPass === '123123') {
        alert('Welcome to the club, admin' )
    } else {
        alert('Password incorrect')
    }
} else {
    alert('Je sous Admin')
}