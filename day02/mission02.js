function mapWithCallback(arr, callback) {
    return arr.map(callback);
}

const double = (num) => num * 2;

const addTen = (num) => num + 10;

console.log(mapWithCallback([1, 2, 3], double));

console.log(mapWithCallback([1, 2, 3], addTen));


