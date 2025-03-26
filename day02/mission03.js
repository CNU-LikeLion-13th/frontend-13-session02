function upperWithCallback(name, callback) {
    return callback(name);
}

const upper = name => name.toUpperCase();

console.log(upperWithCallback("asdfzxcv", upper));