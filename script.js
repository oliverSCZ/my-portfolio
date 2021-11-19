const projectUl = document.querySelector('.projects');
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

const projects = [
  {
    namepreview: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    projectImg: './images/Snapshoot_Portfolio.png',
    projectImgMobile: 'images/mobile_Portfolio.png',
    techologiespreview: [
      'Ruby on rails',
      'Css',
      'JavaScript',
      'html',
    ],
    techologies: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    techologiesMobile: [
      'Ruby on rails',
      'Css',
      'JavaScript',
    ],
    liveVersion: 'https://github.com/oliverSCZ/mobile-version-project',
    gitHubRepo: 'https://github.com/oliverSCZ/mobile-version-project',
  },
  {
    namepreview: 'Multi-Post Stories Gain+Glory',
    name: 'Landing Page Practice',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    projectImg: './images/Snapshoot_Portfolio.png',
    projectImgMobile: 'images/mobile_Portfolio.png',
    techologiespreview: [
      'Ruby on rails',
      'Css',
      'JavaScript',
      'html',
    ],
    techologies: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://codepen.io/oliverscz/pen/NWgQwPY',
    gitHubRepo: 'https://codepen.io/oliverscz/pen/NWgQwPY',
  },
  {
    namepreview: 'Multi-Post Stories Gain+Glory',
    name: 'Survey Form Practice',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    projectImg: './images/Snapshoot_Portfolio.png',
    projectImgMobile: 'images/mobile_Portfolio.png',
    techologiespreview: [
      'Ruby on rails',
      'Css',
      'JavaScript',
      'html',
    ],
    techologies: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://codepen.io/oliverscz/pen/zYdOrxB',
    gitHubRepo: 'https://codepen.io/oliverscz/pen/zYdOrxB',
  },
  {
    namepreview: 'Multi-Post Stories Gain+Glory',
    name: 'Portfolio Mobile Webpage',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    projectImg: './images/Snapshoot_Portfolio.png',
    projectImgMobile: 'images/mobile_Portfolio.png',
    techologiespreview: [
      'Ruby on rails',
      'Css',
      'JavaScript',
      'html',
    ],
    techologies: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://github.com/oliverSCZ/mobile-version-project',
    gitHubRepo: 'https://github.com/oliverSCZ/mobile-version-project',
  },
  {
    namepreview: 'Multi-Post Stories Gain+Glory',
    name: 'Portfolio Mobile Webpage',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    projectImg: './images/Snapshoot_Portfolio.png',
    projectImgMobile: 'images/mobile_Portfolio.png',
    techologiespreview: [
      'Ruby on rails',
      'Css',
      'JavaScript',
      'html',
    ],
    techologies: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://github.com/oliverSCZ/mobile-version-project',
    gitHubRepo: 'https://github.com/oliverSCZ/mobile-version-project',
  },
  {
    namepreview: 'Multi-Post Stories Gain+Glory',
    name: 'Portfolio Mobile Webpage',
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    projectImg: './images/Snapshoot_Portfolio.png',
    projectImgMobile: 'images/mobile_Portfolio.png',
    techologiespreview: [
      'Ruby on rails',
      'Css',
      'JavaScript',
      'html',
    ],
    techologies: [
      'Codekit',
      'Github',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    liveVersion: 'https://github.com/oliverSCZ/mobile-version-project',
    gitHubRepo: 'https://github.com/oliverSCZ/mobile-version-project',
  },
];

const loadProject = (projects) => {
  projects.forEach((project) => {
    const textHtml = `
    <li class="project">
      <div class="project-img">
        <img
          class="img"
          src="${project.projectImg}"
          alt="image placeholder"
        />
      </div>
      <h3 class="project-title">${project.namepreview}</h3>
      <ul class="project-langs">
      
      </ul>
      <a href="#" class="button">See Project</a>
    </li>
    `;
    projectUl.insertAdjacentHTML('beforeend', textHtml);
  });
};

const displayTech = (projects) => {
  const techologList = [...document.querySelectorAll('.project-langs')];
  projects.forEach((project, i) => {
    project.techologiespreview.forEach((tech) => {
      const textHtml = `
             <li class="project-lang">${tech}</li>
            `;
      techologList[i].insertAdjacentHTML('beforeend', textHtml);
    });
  });
};

const clickForPopUp = (projects) => {
  const projectBtn = [...document.querySelectorAll('.button')];
  projectBtn.forEach((btn, i) => {
    btn.addEventListener(
      'click',
      // eslint-disable-next-line no-undef
      (displayPopUp = () => {
        const textHtml = `
        <div class="pop-up-div">
          <div class="inner-pop-up-div">
            <div class="pop-up-img-div">
              <img
                class="pop-up-img"
                src="${projects[i].projectImg}"
              />
            </div>
            <div class="cont-div">
              <h3 class="cont-title">${projects[i].name}</h3>
              <div class="tech-list-div">
                <ul class="project-langs pop-up-mobile-langs">
                
                </ul>
              </div>
              <div class="btn-div">
                <a
                  class="button popUpBtn"
                  href="${projects[i].gitHubRepo}"
                  target="_blank"
                  rel="noopener"
                >
                  See live&nbsp;&nbsp;&nbsp;<i class="fas fa-satellite-dish"></i>
                </a>
                <a
                  class="button popUpBtn"
                  href="${projects[i].liveVersion}"
                  target="_blank"
                  rel="noopener"
                >
                  See source&nbsp;&nbsp;&nbsp;<i class="fab fa-github"></i>
                </a>
              </div>
            </div>
            <p class="pop-up-desc">
              ${projects[i].description}
            </p>
            <span class="close-pop-up"><ion-icon name="close-outline"></ion-icon></span>
          </div>
        </div>;
        `;
        document.body.insertAdjacentHTML('beforebegin', textHtml);

        const popUpDiv = document.querySelector('.pop-up-div');
        popUpDiv.style.display = 'block';

        const displayTechPopUp = (projects) => {
          const techologList = document.querySelector('.pop-up-mobile-langs');
          projects[i].techologies.forEach((tech) => {
            const textHtml = `
            <li class="project-lang pop-up-tech-langs">${tech}</li>
                `;
            techologList.insertAdjacentHTML('beforeend', textHtml);
          });
        };

        displayTechPopUp(projects);
        const closePopUp = document.querySelector('.close-pop-up');
        closePopUp.addEventListener('click', () => {
          popUpDiv.style.display = 'none';
          window.location.reload();
        });
      }),
    );
  });
};

window.onload = () => {
  loadProject(projects);
  displayTech(projects);
  clickForPopUp(projects);
};
/* CONTACT FORM VALIDATION */

const mailInput = document.getElementById('email');

document.getElementById('submit').addEventListener('click', (event) => {
  let canSubmit = Boolean;

  function checkMail() {
    if (
      mailInput.value === mailInput.value.toLowerCase()
    ) {
      canSubmit = true;
    } else {
      const input = document.getElementById('errordiv');
      const error = document.createElement('p');
      error.textContent = 'This email address should be in lowercase.';
      input.appendChild(error);
      document.getElementById('email').classList.add('error-input');
      setTimeout(() => {
        input.removeChild(error);
        document.getElementById('email').classList.remove('error-input');
      },4000);
      canSubmit = false;
    }
    return canSubmit;
  }
