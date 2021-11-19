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
    name: 'Tribute Page Practice',
    description:
      'This project I did in the collaborative sessions, but only the skeleton and other stuffs. A few days ago, I improve it, using css.',
    projectImg: './images/tributepage.jpg',
    techologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'GitHub',
      'Codepen'
    ],
    liveVersion: 'https://codepen.io/oliverscz/pen/WNOqWJw',
    gitHubRepo: 'https://codepen.io/oliverscz/pen/WNOqWJw',
  },
  {
    name: 'Landing Page Practice',
    description:
      'This project I did in the collaborative sessions, but only the skeleton and other stuffs. A few days ago, I improve it, using css',
    projectImg: './images/landingpage.jpg',
    techologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'GitHub',
      'Codepen',
    ],
    liveVersion: 'https://codepen.io/oliverscz/pen/NWgQwPY',
    gitHubRepo: 'https://codepen.io/oliverscz/pen/NWgQwPY',
  },
  {
    name: 'Survey Form Practice',
    description:
      'This project I did in the collaborative sessions, but only the skeleton and other stuffs. A few days ago, I improve it, using css.',
    projectImg: './images/surveyform.jpg',
    techologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'GitHub',
      'GitFlow',
    ],
    liveVersion: 'https://codepen.io/oliverscz/pen/zYdOrxB',
    gitHubRepo: 'https://codepen.io/oliverscz/pen/zYdOrxB',
  },
  {
    name: 'Portfolio Mobile Webpage',
    description:
      'I am continuously working on this project, as I receive training and new knowledge, I come here and add all that to this project.',
    projectImg: './images/portfolio-project.jpg',
    techologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'VScode'],
    liveVersion: 'https://github.com/oliverSCZ/mobile-version-project',
    gitHubRepo: 'https://github.com/oliverSCZ/mobile-version-project',
  },
  {
    name: 'Portfolio Mobile Webpage',
    description:
      'I am continuously working on this project, as I receive training and new knowledge, I come here and add all that to this project.',
    projectImg: './images/portfolio-project.jpg',
    techologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'VScode'],
    liveVersion: 'https://github.com/oliverSCZ/mobile-version-project',
    gitHubRepo: 'https://github.com/oliverSCZ/mobile-version-project',
  },
  {
    name: 'Portfolio Mobile Webpage',
    description:
      'I am continuously working on this project, as I receive training and new knowledge, I come here and add all that to this project.',
    projectImg: './images/portfolio-project.jpg',
    techologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'VScode'],
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
      <h3 class="project-title">${project.name}</h3>
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
    project.techologies.forEach((tech) => {
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
                  See source
                </a>
                <a
                  class="button popUpBtn"
                  href="${projects[i].liveVersion}"
                  target="_blank"
                  rel="noopener"
                >
                  See live
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

const userData = [];

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

function saveDataToLs() {
  localStorage.setItem('userData', JSON.stringify(userData));
}

function getDataFromForm() {
  const newUser = new User(nameInput.value, emailInput.value);
  userData.length = 0;
  userData.push(newUser);
  saveDataToLs();
}

function getDataFromLocalSt() {
  const dataFromLocal = JSON.parse(localStorage.getItem('userData'));
  if (dataFromLocal) {
    dataFromLocal.forEach((data) => {
      nameInput.value = data.name;
      emailInput.value = data.email;
    });
  }
}

form.addEventListener('submit', getDataFromForm);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const capitalLetters = [];

  const emailCheck = emailInput.value.split('');
  for (let i = 0; i < emailCheck.length; i += 1) {
    if (!/[a-z]/.test(emailCheck[i]) && /[A-Z]/.test(emailCheck[i])) {
      capitalLetters.push(emailCheck[i]);
    }
  }

  function errorMessage() {
    invalidH3.textContent = 'Please enter your email in lower case';
    invalidH3.style.display = 'block';
    invalidH3.style.color = 'red';
    emailInput.style.border = 'thin solid red';
    setTimeout(() => {
      invalidH3.style.display = 'none';
      emailInput.style.border = '1px solid #d0d9d4';
    }, 3000);
  }

  function corectEmail() {
    invalidH3.textContent = '';
    form.submit();
  }

  if (capitalLetters.length > 0) errorMessage();
  else corectEmail();
});

window.onload = () => {
  loadProject(projects);
  displayTech(projects);
  clickForPopUp(projects);
  getDataFromLocalSt();
};
