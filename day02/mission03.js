function formatName(name, callback) {
    return callback(name);
}
const upperCase = name => name.toUpperCase();
const greeting = name => `안녕하세요, ${name}님`;

console.log(formatName("gaeun", upperCase));
console.log(formatName("gaeun", greeting));