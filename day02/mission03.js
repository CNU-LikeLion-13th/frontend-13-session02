let name = 'alice';

function toCapital(name) {
    return name.toUpperCase()
}

function changeMessageFormat(name, callback) {
    return toCapital(name);
}

console.log(changeMessageFormat(name));