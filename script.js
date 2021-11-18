const menu = document.querySelector('.menu');
const btn = document.querySelector('.menu-btn');
const btnClose = document.querySelector('.menu-close');

btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  btnClose.classList.add('close-act');
  btn.classList.add('menu-btn-close');
});

btnClose.addEventListener('click', () => {
  menu.classList.remove('active');
  btnClose.classList.remove('close-act');
  btn.classList.remove('menu-btn-close');
});

menu.addEventListener('click', () => {
  menu.classList.remove('active');
  btnClose.classList.remove('close-act');
  btn.classList.remove('menu-btn-close');
});

document.getElementById('project-1').addEventListener('click', () => {
    document.getElementById('modal-popup').classList.add('popup-visible');
    setTimeout(() => {
      document.getElementById('modal-popup').classList.add('popup-transparency');
    }, 300);
  });
  
  document.getElementById('project-2').addEventListener('click', () => {
    console.log('hizo click');
    document.getElementById('modal-popup').classList.add('popup-visible');
    setTimeout(() => {
      document.getElementById('modal-popup').classList.add('popup-transparency');
    }, 300);
  });
  
  document.getElementById('project-3').addEventListener('click', () => {
    document.getElementById('modal-popup').classList.add('popup-visible');
    setTimeout(() => {
      document.getElementById('modal-popup').classList.add('popup-transparency');
    }, 300);
  });
  
  document.getElementById('project-4').addEventListener('click', () => {
    document.getElementById('modal-popup').classList.add('popup-visible');
    setTimeout(() => {
      document.getElementById('modal-popup').classList.add('popup-transparency');
    }, 300);
  });
  
  document.getElementById('project-5').addEventListener('click', () => {
    document.getElementById('modal-popup').classList.add('popup-visible');
    setTimeout(() => {
      document.getElementById('modal-popup').classList.add('popup-transparency');
    }, 300);
  });
  
  document.getElementById('project-6').addEventListener('click', () => {
    document.getElementById('modal-popup').classList.add('popup-visible');
    setTimeout(() => {
      document.getElementById('modal-popup').classList.add('popup-transparency');
    }, 300);
  });

    document.getElementById('close-popup').addEventListener('click', () =>{
    document.getElementById('modal-popup').classList.remove('popup-transparency');
    setTimeout(() => {
        document.getElementById('modal-popup').classList.remove('popup-visible');
    }, 300);
    });
