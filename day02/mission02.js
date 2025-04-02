function mapWithCallback(array, callback) {
    return callback(array);
}

function double (array){
    return array.map(element => element*2);
}

function addTen (array) {
    return array.map(element => element+10);
}

console.log(mapWithCallback([1, 2, 3], double));
console.log(mapWithCallback([1, 2, 3], addTen));