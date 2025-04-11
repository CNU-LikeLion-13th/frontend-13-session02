function cal(operation){
    const num1=parseFloat(document.querySelector("#num1").value);
    const num2=parseFloat(document.querySelector("#num2").value);
    const result=document.querySelector("#result");

    if(isNaN(num1)||isNaN(num2)){
        result.textContent="숫자 입력";
        return;
    }

    if(operation==='+'){
        result.textContent=`${num1+num2}`;
    }
    else if(operation==="-"){
        result.textContent=`${num1-num2}`;
    }
    else if(operation==="*"){
        result.textContent = `${num1*num2}`;
    }
    else if(operation==="/"){

    result.textContent = `${num1/num2}`;
    }

}
