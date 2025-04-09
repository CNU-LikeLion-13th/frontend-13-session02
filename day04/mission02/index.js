const result = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const num1 = Number(document.getElementById("num1").value);
        const num2 = Number(document.getElementById("num2").value);

        if (isNaN(num1) || isNaN(num2)) {
            result.textContent = "숫자입력"
            return;
        }

        const op = event.target.textContent;

        if (op === "+") {
            result.textContent = num1 + num2;
        } else if (op === "−") {
            result.textContent = num1 - num2;
        } else if (op === "×") {
            result.textContent = num1 * num2;
        } else if (op === "÷") {
            result.textContent = num1 / num2;
        }
    });
});

