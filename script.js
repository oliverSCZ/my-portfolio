const menu = document.querySelector('.menu');
const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', () => {
    menu.classList.toggle('active')
})