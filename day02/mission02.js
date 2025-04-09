function mapWithCallback(arr, callback) {
    return arr.map(callback);
}
function double(num) {
    return num * 2;
}
function addTen(num) {
    return num + 10;
}
console.log(mapWithCallback([1, 2, 3], double));
console.log(mapWithCallback([1, 2, 3], addTen));