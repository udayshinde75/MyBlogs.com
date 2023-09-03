const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY>100)
});
let menu  = document.querySelector('#menu-icon');
let navigationlist = document.querySelector('.navigationlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navigationlist.classList.toggle('open');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navigationlist.classList.remove('open')
}