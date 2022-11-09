const menuOpen = document.querySelector('#menu-open')
const menuMobile = document.querySelector('.container-menu-mobile')
const menuClose = document.querySelector('#menu-close')

menuOpen.addEventListener('click', () => {
    menuMobile.classList.remove("close")
})
menuClose.addEventListener('click', () => {
    menuMobile.classList.add('close')
})