function formatName(name, callback) {
    return callback(name);
}
function upperCase(name, callback) {
    return name.toUpperCase();
}
function greeting(name, callback) {
    return "Hello, " + name + "!";
}

console.log(formatName("sol", upperCase)); 
console.log(formatName("sol", greeting));