function mapWithCallback(num_array, Callback) {
  return Callback(num_array);
}
const double = (num_array) => {
  return num_array.map((element) => element * 2);
};
const addTen = (num_array) => {
  return [...num_array, 10];
};

console.log(mapWithCallback([1, 2, 3], double));
console.log(mapWithCallback([1, 2, 3], addTen));
