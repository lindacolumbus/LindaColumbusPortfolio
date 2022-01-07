const portfolio = {};

portfolio.projectNum = document.getElementsByClassName('slideshowNum');
portfolio.slideshowImage1 = document.getElementsByClassName('projectSlideshow1');
portfolio.slideshowImage2 = document.getElementsByClassName('projectSlideshow2');
portfolio.skillsList = document.getElementsByClassName('featuredDescriptions');
portfolio.projectTitle = document.getElementsByClassName('projectTitle');
portfolio.projectDesc = document.getElementsByClassName('projectDesc');
portfolio.menuButton = document.getElementsByClassName('fas fa-grip-lines');
portfolio.modal = document.getElementsByClassName('modal');
portfolio.closeModal = document.getElementsByClassName('closeModal');

// Array to store info/list of projects
portfolio.projects = [

    tasteMaker = {
    projectNum: '01 / 04',
    srcImage1: './assets/Taste Maker1.png',
    alt1: 'Pink headphones on a pink and teal backdrop',
    srcImage2: './assets/Taste Maker2.png',
    alt2: 'Music recommendation of BORNS based off of a Glass Animals musician search query',
    skillsHTML: '<ul><li><p class="tagline">HTML5</p></li><li><p class="tagline">CSS</p></li><li><p class="tagline">JavaScript</p></li><li><p class="tagline">API</p></li><li><p class="tagline">React</p></li><li><p class="tagline">Firebase</p></li></ul>',
    title: 'Taste Maker',
    description: `Music recommendation generator made with React, using an API call to fetch data and Firebase to store the user's search history.`
    },

    doSomething = {
    projectNum: '02 / 04',
    srcImage1: './assets/Do Something1.png',
    alt1: 'Woman lying on ground with a book covering her face',
    srcImage2: './assets/Do Something2.png',
    alt2: 'Screenshot of form prompting user the choose number of participants for an activity recommendation',
    skillsHTML: '<ul><li><p class="tagline">HTML5</p></li><li><p class="tagline">CSS</p></li><li><p class="tagline">JavaScript</p></li><li><p class="tagline">API</p></li>',
    title: 'Do Something',
    description: `Activity generator app integrating three API calls to work dynamically together with user input.`
    },

    weatherScout = {
    projectNum: '03 / 04',
    srcImage1: './assets/Weather Scout1.png',
    alt1: 'Pink and cream coloured clouds on a purple sky',
    srcImage2: './assets/Weather Scout2.png',
    alt2: 'Screenshot of form prompting user for a city name for a weather forecast',
    skillsHTML: '<ul><li><p class="tagline">HTML5</p></li><li><p class="tagline">CSS</p></li><li><p class="tagline">SCSS</p></li><li><p class="tagline">JavaScript</p></li><li><p class="tagline">API</p></li></ul>',
    title: 'Weather Scout',
    description: 'Through pair programming, created an app that uses two API calls to return current and future weather data.'
    },

    delicious = {
        projectNum: '04 / 04',
        srcImage1: './assets/Delicious 1.jpeg',
        alt1: 'Top down view of two pink coloured drinks, garnished with blueberries and a lime slice',
        srcImage2: './assets/Delicious2.png',
        alt2: 'Screenshot of a blog page with related posts and comments',
        skillsHTML: '<ul class="shortSkillList"><li><p class="tagline">HTML5</p></li><li><p class="tagline">CSS</p></li><li><p class="tagline">SCSS</p></li></ul>',
        title: 'Delicious',
        description: 'Was provided a design and was tasked to convert into a three-page, functional, responsive website.'
    }
]

// Project image carousel 
portfolio.startEventListener = () => {
    const nextButton = document.getElementsByClassName('next');
    const prevButton = document.getElementsByClassName('prev');

    let index = 0;

    const changeImage = (value) => {
        portfolio.projectNum[0].textContent = `${portfolio.projects[value].projectNum}`;
        portfolio.slideshowImage1[0].src = `${portfolio.projects[value].srcImage1}`;
        portfolio.slideshowImage1[0].alt = `${portfolio.projects[value].alt1}`;
        portfolio.slideshowImage2[0].src = `${portfolio.projects[value].srcImage2}`;
        portfolio.slideshowImage2[0].alt = `${portfolio.projects[value].alt2}`;
        portfolio.skillsList[0].innerHTML = `${portfolio.projects[value].skillsHTML}`;
        portfolio.projectTitle[0].textContent = `${portfolio.projects[value].title}`;
        portfolio.projectDesc[0].textContent = `${portfolio.projects[value].description}`
    }

    nextButton[0].addEventListener('click', function(event) {
        if (index === portfolio.projects.length - 1) {
            index = 0;
            changeImage(index);
        } else {
            index++;
            changeImage(index);
        }
    })

    prevButton[0].addEventListener('click', function(event) {
        if (index === 0) {
            index = portfolio.projects.length - 1;
            changeImage(index);
        } else {
            index--;
            changeImage(index);
        }
    })
}

// Menu modal open/close
portfolio.menuButton[0].addEventListener('click', function(event) {
    portfolio.modal[0].classList.add('visible');
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
    document.body.style.position = 'fixed';
})

portfolio.closeModal[0].addEventListener('click', function (event) {
    portfolio.modal[0].classList.remove('visible');
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'initial';
    document.body.style.position = 'static';
})


portfolio.init = () => {
    portfolio.startEventListener()
}

portfolio.init();