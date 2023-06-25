const  burgerMenu = document.querySelector('#burger-menu')
const  overlay = document.querySelector('#menu')
burgerMenu.addEventListener('click',function (){
    this.classList.toggle("close")
    overlay.classList.toggle("overlay")
})