var num1Input = document.querySelector("#num1");
var num2Input = document.querySelector("#num2");
var result = document.querySelector("#result");

buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        var num1 = Number(num1Input.value);
        var num2 = Number(num2Input.value);
        if (!validate(num1, num2)) {
            result.textContent = "올바른 숫자를 입력해주세요";
            return;
        }
        result.textContent = "결과 : " + operator(btn.textContent)(num1, num2);
    });
});

function operator(oper) {
    if (oper == "+") return (a, b) => a + b;
    else if (oper == "−") return (a, b) => a - b;
    else if (oper == "×") return (a, b) => a * b;
    else if (oper == "÷") return (a, b) => a / b;
}

function validate(a, b) {
    return a && b;
}
