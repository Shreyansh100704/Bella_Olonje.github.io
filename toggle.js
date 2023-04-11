menu = document.querySelector('.menu')
mobul2 = document.querySelector('.mobul2')
menuList = document.querySelector('.menuList')
mobnorm = document.querySelector('.mobnorm')
div = document.querySelector('.div')

menu.addEventListener('click', ()=>{
    mobul2.classList.toggle('mobul');
    mobnorm.classList.toggle('mobresp');
    menuList.classList.toggle('resp');
}
)