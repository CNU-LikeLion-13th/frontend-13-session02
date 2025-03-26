
function mapWithCallback(arr, callback) {
    return arr.map(callback);
}

const double = a => a * 2;
const addTen = a => a + 10;

console.log(mapWithCallback([1, 2, 3], double));
console.log(mapWithCallback([1, 2, 3], addTen));