function formatName(string, callback){
    const result=callback(string);
    return result;
}

function upperCase(name){
    return name.toUpperCase();
}

function greeting(name){
    return "안녕하세요"+","+name+"남";
}
console.log(formatName("kimminhee", upperCase));

console.log(formatName("kimminhee", greeting));


