function formatName(name, Callback) {
  return Callback(name);
}

function upperCase(name) {
  return name.toUpperCase();
}

function greeting(name) {
  let greeting = "Hi, I'm ";
  return greeting + name;
}

console.log(formatName("seolwootae", upperCase));
console.log(formatName("seolwootae", greeting));
