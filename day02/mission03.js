function inName(name, callBack) {
    return callBack(name);
}

function upper(name) {
    return name.toUpperCase();
}

console.log(inName("jiyo", upper));