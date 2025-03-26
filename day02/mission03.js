const name1 = "han";

const Callback = (name, callback) => {
    name2 = callback(name);
    console.log(name2);
}

const ToUpper = (name) => {
    return name.toUpperCase();
}

Callback(name1, ToUpper);