const btn = document.querySelector('#colorBtn');

btn.onclick=function(){
    document.body.style.backgroundColor= 'lightblue';
}

btn.addEventListenenr('click',()=>{
    document.body.style.backgroundColor= 'lightblue';

});