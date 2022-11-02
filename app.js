let menuToggle =document.querySelector('.menuToggle');
let header = document.querySelector('header');
let body = document.querySelector('body');

menuToggle.onclick = function(){
    header.classList.toggle('open');
    body.classList.toggle('start')
}