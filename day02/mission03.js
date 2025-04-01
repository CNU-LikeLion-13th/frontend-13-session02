function formatName(name, callback) {
    return callback(name);
}

const upperCase = name => name.toUpperCase();
function greeting(name) {
    return `안녕하세요, ${name}님`;
}

console.log(formatName("jang ju hyeong", upperCase));
console.log(formatName("jang ju hyeong", greeting));

