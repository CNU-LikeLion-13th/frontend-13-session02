
const mapWithCallback = (arr, callback) => {
    return callback(arr);
}

const double = (arr) => {
    return arr.map((number) => number * 2);
}

const addTen = (arr) => {
    return arr.map((number) => number + 10);
}

console.log(mapWithCallback([1, 2, 3], double));

console.log(mapWithCallback([1, 2, 3], addTen));