function mapWithCallback(numbers, callback) {
    return numbers.map(callback);
}
const double = num => num * 2;
const addTen = num => num + 10;

console.log(mapWithCallback([1, 2, 3], double)); // [2, 4, 6]
console.log(mapWithCallback([1, 2, 3], addTen)); // [11, 12, 13]