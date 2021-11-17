const menu = document.querySelector('.menu');
const btn = document.querySelector('.menu-btn');
const btnClose = document.querySelector('.menu-close');
const selectMenu = document.querySelector('.menu-i');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    btnClose.classList.add('close-act');
    btn.classList.add('menu-btn-close');
})

btnClose.addEventListener('click', () => {
    menu.classList.remove('active');
    btnClose.classList.remove('close-act');
    btn.classList.remove('menu-btn-close');
})

menu.addEventListener('click', () => {
    console.log('dieron clic');
    menu.classList.remove('active');
    btnClose.classList.remove('close-act');
    btn.classList.remove('menu-btn-close');
}) 