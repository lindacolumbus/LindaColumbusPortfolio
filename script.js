const portfolio = {};

portfolio.projectNum = document.getElementsByClassName('slideshowNum');
portfolio.slideshowImage1 = document.getElementsByClassName('projectSlideshow1');
portfolio.slideshowImage2 = document.getElementsByClassName('projectSlideshow2');
portfolio.skillsList = document.getElementsByClassName('featuredDescriptions');
portfolio.projectTitle = document.getElementsByClassName('projectTitle');
portfolio.menuButton = document.getElementsByClassName('fas fa-grip-lines');
portfolio.modal = document.getElementsByClassName('modal');
portfolio.closeModal = document.getElementsByClassName('closeModal');

// Array to store info/list of projects
portfolio.projects = [

    tasteMaker = {
    projectNum: '01 / 03',
    srcImage1: './assets/Taste Maker1.png',
    srcImage2: './assets/Taste Maker2.png',
    skillsHTML: '<ul><li><p class="tagline">HTML5</p></li><li><p class="tagline">CSS</p></li><li><p class="tagline">JavaScript</p></li><li><p class="tagline">API</p></li><li><p class="tagline">React</p></li><li><p class="tagline">Firebase</p></li></ul>',
    title: 'Taste Maker'
    },

    weatherScout = {
    projectNum: '02 / 03',
    srcImage1: './assets/Weather Scout1.png',
    srcImage2: './assets/Weather Scout2.png',
    skillsHTML: '<ul><li><p class="tagline">HTML5</p></li><li><p class="tagline">CSS</p></li><li><p class="tagline">SCSS</p></li><li><p class="tagline">JavaScript</p></li><li><p class="tagline">API</p></li></ul>',
    title: 'Weather Scout'
    },

    delicious = {
        projectNum: '03 / 03',
        srcImage1: './assets/Delicious 1.jpeg',
        srcImage2: './assets/Delicious2.png',
        skillsHTML: '<ul><li><p class="tagline">HTML5</p></li><li><p class="tagline">CSS</p></li><li><p class="tagline">SCSS</p></li></ul>',
        title: 'Delicious'
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
        portfolio.slideshowImage2[0].src = `${portfolio.projects[value].srcImage2}`;
        portfolio.skillsList[0].innerHTML = `${portfolio.projects[value].skillsHTML}`
        portfolio.projectTitle[0].textContent = `${portfolio.projects[value].title}`
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
})

portfolio.closeModal[0].addEventListener('click', function (event) {
    portfolio.modal[0].classList.remove('visible');
    document.body.style.overflow = 'initial';
})


portfolio.init = () => {
    portfolio.startEventListener()
}

portfolio.init();