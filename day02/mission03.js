let name = 'alice';

function changeMessageFormat(name, callback) {
    return callback(name);
}

function toCapital(name) {
    return name.toUpperCase()
}

console.log(changeMessageFormat(name, toCapital));