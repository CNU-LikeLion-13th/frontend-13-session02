let name = '김현서';

function changeMessageFormat(name, callback) {
    let message = '안녕하세요, ' + callback(name) + '님'
    console.log(message);
}

function toCapital(name) {
    return name.toUpperCase();
}

function toLowerCase(name) {
    return name.toLowerCase();
}

changeMessageFormat(name, toCapital);
changeMessageFormat(name, toLowerCase);