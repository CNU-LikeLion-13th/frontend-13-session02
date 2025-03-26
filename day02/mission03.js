function formatName(name, callback) {
    return callback(name);
}
const upperCase = name => name.toUpperCase();

console.log(formatName("gaeun", upperCase));