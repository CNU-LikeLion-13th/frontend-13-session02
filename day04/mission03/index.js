function press(value){
    const display = document.querySelector("#display");
    display.value += value;
}

function calculate(){
    const display = document.querySelector("#display");
    display.value = eval(display.value);
}

function clearDisplay(){
    document.querySelector('#display').value = '';
}


