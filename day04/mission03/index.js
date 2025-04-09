var plusButton = document.querySelector("#plus");
var minusButton = document.querySelector("#minus");
var multiplyButton = document.querySelector("#multiply");
var divideButton = document.querySelector("#divide");
var equalButton = document.querySelector("#equal");

var numberButtons = document.querySelectorAll(".number-button");
var resetButton = document.querySelector(".clear-btn");

var display = document.querySelector("#display");

numberButtons.forEach((numberButton) =>
    numberButton.addEventListener("click", () => {
        console.log(numberButton.textContent);
        display.value += String(numberButton.textContent);
    })
);

resetButton.addEventListener("click", () => {
    displayClear();
});

plusButton.addEventListener("click", () => {
    operatorClicked("+");
});
minusButton.addEventListener("click", () => {
    operatorClicked("-");
});
multiplyButton.addEventListener("click", () => {
    operatorClicked("*");
});
divideButton.addEventListener("click", () => {
    operatorClicked("/");
});
equalButton.addEventListener("click", () => {
    try {
        var result = eval(display.value);
        if (result == "Infinity") alert("0으로 나눌 수 없습니다.");
        else display.value = result;
    } catch {
        alert("올바른 값을 입력해주세요.");
    }
});
function operatorClicked(oper) {
    display.value += oper;
}

function displayClear() {
    display.value = "";
}
