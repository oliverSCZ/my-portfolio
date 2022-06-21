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
    namepreview: 'Car Rental Platform',
    name: 'Car Rental App',
    description:
      'A simple API application developed in RoR that displays a list of cars and allows users to add them to their favorites. The front end of this application is developed in React JS, please see link below. ',
    projectImg: 'https://raw.githubusercontent.com/oliverSCZ/car-rental-frontend/dev/public/screenshots/Index_desktop.png',
    projectImgMobile: 'https://raw.githubusercontent.com/oliverSCZ/car-rental-frontend/dev/public/screenshots/index_mobile.png',
    techologiespreview: [
      'Ruby on rails',
      'Redux',
      'React',
      'Tailwind CSS',
    ],
    techologies: [
      'Ruby on Rails',
      'React',
      'Redux',
      'Tailwind CSS',
      'Swagger',
    ],
    techologiesMobile: [
      'Ruby on rails',
      'React',
      'Tailwind CSS',
    ],
    liveVersion: 'https://github.com/oliverSCZ/car-rental-frontend',
    gitHubRepo: 'http://car-rental-0.herokuapp.com/',
  },
  {
    namepreview: 'Budgetic',
    name: 'The Budgeting App',
    description:
    'A simple application developed in Ruby on Rails that helps you keep track of your expenses.',
    projectImg: './images/budgetic_desktop.png',
    projectImgMobile: 'images/budgetic_categories.png',
    techologiespreview: [
      'Ruby on Rails',
      'Tailwind CSS',
      'PostgreSQL',
    ],
    techologies: [
      'Ruby on Rails',
      'Tailwind CSS',
      'PostgreSQL',
      'Swagger',
    ],
    liveVersion: 'https://github.com/oliverSCZ/budgetic-app',
    gitHubRepo: '#',
  },
  {
    namepreview: 'Pokedex',
    name: 'Adopt a Pokemon today',
    description:
    'This app is the capstone project we built at the end of our JavaScript module. Its a nostalgic interpretation of a pokedex, and we hope you enjoy it as much as we did putting it together. Go and catch em all!',
    projectImg: 'https://raw.githubusercontent.com/fabianofrank/pokemon-api/master/src/screenshot.png',
    projectImgMobile: 'https://raw.githubusercontent.com/fabianofrank/pokemon-api/master/src/screenshot.png',
    techologiespreview: [
      'Webpack',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    techologies: [
      'Webpack',
      'CSS',
      'JavaScript',
      'HTML',
      'Jest',
    ],
    liveVersion: 'https://github.com/fabianofrank/pokemon-api',
    gitHubRepo: 'https://fabianofrank.github.io/pokemon-api/dist/',
  },
  {
    namepreview: 'Math Magicians',
    name: 'Lets do some maths magic!',
    description:
    '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations & Read a random math-related quote.',
    projectImg: 'https://raw.githubusercontent.com/oliverSCZ/Math-Magicians/develop/app_screenshot.png',
    projectImgMobile: 'https://raw.githubusercontent.com/oliverSCZ/Math-Magicians/develop/app_screenshot.png',
    techologiespreview: [
      'React',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    techologies: [
      'React',
      'CSS',
      'JavaScript',
      'HTML',
      'Netlify',
    ],
    liveVersion: 'https://github.com/oliverSCZ/Math-Magicians',
    gitHubRepo: 'https://xenodochial-hamilton-52708c.netlify.app/',
  },
  {
    namepreview: 'Bookstore',
    name: 'The Bookstore',
    description:
    'The Bookstore is a web app that allows the user to keep track and register the progress of reading the favorite books.',
    projectImg: 'https://raw.githubusercontent.com/oliverSCZ/bookstore/develop/app_screenshot.png',
    projectImgMobile: 'https://raw.githubusercontent.com/oliverSCZ/bookstore/develop/app_screenshot.png',
    techologiespreview: [
      'React',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    techologies: [
      'React',
      'CSS',
      'JavaScript',
      'HTML',
      'Netlify',
    ],
    liveVersion: 'https://github.com/oliverSCZ/bookstore',
    gitHubRepo: 'https://awesome-bookstore.herokuapp.com/',
  },
  {
    namepreview: 'The Recipe App',
    name: 'The Recipe App',
    description:
    'A simple application developed in Ruby on Rails to help keep track of recipes and food items.',
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
      }, 4000);
      canSubmit = false;
    }
    return canSubmit;
  }

  function validate() {
    checkMail();

    if (canSubmit === false) {
      event.preventDefault();
    }
  }

  validate();
});

/* CONTACT FORM VALIDATION */
