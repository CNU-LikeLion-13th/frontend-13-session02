
function mapWithCallback(arr, callback) {
    return callback(arr);
}

const double = arr => arr.map(a => a * 2);
const addTen = a => a + 10;

console.log(mapWithCallback([1, 2, 3], double));
console.log(mapWithCallback([1, 2, 3], addTen));