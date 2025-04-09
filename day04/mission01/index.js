var num1Input = document.querySelector("#num1");
var num2Input = document.querySelector("#num2");

var result = document.querySelector("#result");

addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        if (validate() && document.activeElement.id == "num2") add();
    }
});

function add() {
    let num1 = Number(num1Input.value);
    let num2 = Number(num2Input.value);

    result.textContent = "결과 : " + (num1 + num2);
}

function validate() {
    return num1Input.value && num2Input.value;
}
