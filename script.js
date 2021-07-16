
      const burger = document.querySelector('.burger');
      const header = document.querySelector('.nav-links');
      const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", function() {
        header.classList.toggle("nav-active");
    

      navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '' ;  
        }else{
            link.style.animation = 'navLinkFade 0.5s ease forwards ${index /7 + 0.3}s';
        }
    });

    
});



let btnGet = document.querySelector('#btn-get');
let btnSet = document.querySelector('#btn-set');
let inputGet = document.querySelector('#input-get');
let inputSet = document.querySelector('#input-set');
let result = document.querySelector('#result');
let del = document.querySelector('#delete');

btnGet.addEventListener('click', ()=>{
    result.innerText = inputGet.value;
    inputGet.value="";
});
del.addEventListener('click', ()=>{
   result.remove() 
})

let btnGet2 = document.querySelector('#btn-get2');
let btnSet2 = document.querySelector('#btn-set2');
let inputGet2 = document.querySelector('#input-get2');
let inputSet2 = document.querySelector('#input-set2');
let result2 = document.querySelector('#result2');
let del2 = document.querySelector('#delete2');

btnGet2.addEventListener('click', ()=>{
    result2.innerText = inputGet2.value;
    inputGet2.value="";
});
del2.addEventListener('click', ()=>{
   result2.remove() 
})


