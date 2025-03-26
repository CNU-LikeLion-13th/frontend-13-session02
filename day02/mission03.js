let name = 'hyeonseo';

function formatName(name, callback) {
    message = callback(name);
    return message
}

function upperCase(name) {
    return name.toUpperCase();
}

function greeting(name) {
    return '안녕하세요, ' + name + '님';
}

console.log(formatName(name, upperCase));

console.log(formatName(name, greeting));