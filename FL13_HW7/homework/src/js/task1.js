let userLogin = prompt('Enter your login', '');
let user = 'User';
let admin = 'Admin';
let minUserLoginLength = 4;
let currentTimeHours = new Date().getHours();
let dayTimeChecker = 20;

if (userLogin === null || userLogin ==='') {
    alert('Canceled');
} else if (userLogin.length < minUserLoginLength) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else if (userLogin === user || userLogin === admin ) {

    let pass = prompt('Enter your password', '');

    if (pass === null || pass === '') {
        alert('Canceled');
    } else if (userLogin === user && pass === 'UserPass' && currentTimeHours < dayTimeChecker) {
        alert('Good day, dear User!');
    } else if (userLogin === admin && pass === 'RootPass' && currentTimeHours < dayTimeChecker) {
        alert('Good day, dear Admin!');
    } else if(userLogin === user && pass === 'UserPass' && currentTimeHours >= dayTimeChecker) {
        alert('Good evening, dear User!');
    } else if (userLogin === admin && pass === 'RootPass' && currentTimeHours >= dayTimeChecker) {
        alert('Good evening, dear Admin!');
    }
} else {
    alert('I don\'t know you');
}