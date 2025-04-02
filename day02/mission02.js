function mapWithCallback(num, callback) {
    const result = callback(num);
    return result;
}

const double = (arr) => { return arr.map((num) => num * 2) }

const addTen = (arr) => { return arr.map((num) => num + 10) }

console.log(mapWithCallback([1, 2, 3], double));

console.log(mapWithCallback([1, 2, 3], addTen));
