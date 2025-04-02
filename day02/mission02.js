function mapWithCallback(arr, callback) {
    return arr.map(callback);
  }
  
  function square(num) {
    return num ** 2;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = mapWithCallback(numbers, square);
  
  console.log(squaredNumbers);
  