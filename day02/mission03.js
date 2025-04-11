let userName = 'hyeonseo';

function formatName(name, callback) {
    message = callback(name);
    return message
}

function upperCase(name) {
    return userName.toUpperCase();
}

function greeting(name) {
    return '안녕하세요, ' + userName + '님';
}

console.log(formatName(userName, upperCase));

console.log(formatName(userName, greeting));