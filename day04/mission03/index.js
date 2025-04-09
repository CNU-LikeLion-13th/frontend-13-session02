const buttons = document.querySelectorAll(".button-row button");
const result = document.getElementById("display");

let s = '';

buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let e = event.target.textContent;

        if (e === "=") {
            try {
                s = s // 모든 해당 문자열을 오른쪽 값으로 바꾸기. if 말고 이 방법도 있더라군요.
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/')
                    .replace(/−/g, '-');
                result.value = eval(s);
                if (result.value === "Infinity") throw "Error";
                s = result.value;
        }  catch {
            result.value = "ERROR";
            s = '';
            }
        } else if (e === "Clear") {
            result.value = ''
            s = '';
        } else {
            result.value = s + e;
            s += e;
        }
    })
})