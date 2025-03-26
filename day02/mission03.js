const  num =(a,callback) => {
    let result = a;
    callback(result);
}

const changenum = (result) =>{
    console.log(result.toUpperCase());
}

const greeting = (result) => {
    console.log(result.toLowerCase());
}
num('wdy', changenum);
num('wdy', greeting);
