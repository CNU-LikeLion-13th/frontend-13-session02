const btn=document.querySelector('#box');

btn.addEventListener('mousedown', (e) => {
    if(e.button===0){
        box.textContent = '왼쪽 눌림';
    }
    else if(e.button==1){
        box.textContent='휠';
    }
    else if(e.button===2){
        box.textContent='우클릭';
    }
});

box.addEventListener("mouseup", ()=>{
    box.textContent="클릭해보세요";
});

box.addEventListener("contextmouse", (e)=>{
    e.preventDefault();
}
);

