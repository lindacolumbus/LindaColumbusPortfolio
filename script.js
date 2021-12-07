const portfolio = {};

portfolio.slideshowImage1 = document.getElementsByClassName('projectSlideshow1');
portfolio.slideshowImage2 = document.getElementsByClassName('projectSlideshow2');
portfolio.skillsList = document.getElementsByClassName('featuredDescriptions');
portfolio.projectTitle = document.getElementsByClassName('projectTitle')

portfolio.projects = [

    tasteMaker = {
    srcImage1: './assets/Taste Maker1.png',
    srcImage2: './assets/Taste Maker2.png',
    skillsHTML: '<ul><li><p class="tagline">HTML5</p></li><li><p class="tagline">CSS</p></li><li><p class="tagline">JavaScript</p></li><li><p class="tagline">API</p></li><li><p class="tagline">React</p></li><li><p class="tagline">Firebase</p></li></ul>',
    title: 'Taste Maker'
    },

    weatherScout = {
    srcImage1: './assets/Weather Scout1.png',
    srcImage2: './assets/Weather Scout2.png',
    skillsHTML: '<ul><li><p class="tagline">HTML5</p></li><li><p class="tagline">CSS</p></li><li><p class="tagline">SCSS</p></li><li><p class="tagline">JavaScript</p></li><li><p class="tagline">API</p></li></ul>',
    title: 'Weather Scout'
    },

    delicious = {
        srcImage1: './assets/Delicious 1.jpeg',
        srcImage2: './assets/Delicious2.png',
        skillsHTML: '<ul><li><p class="tagline">HTML5</p></li><li><p class="tagline">CSS</p></li><li><p class="tagline">SCSS</p></li></ul>',
        title: 'Delicious'
    }
]

console.log(portfolio.projects.length)

portfolio.startEventListener = () => {
    // Next arrow click event to cycle through projects on home page
    const nextButton = document.getElementsByClassName('next');

    let index = 0;

    const changeImage = (value) => {
        portfolio.slideshowImage1[0].src = `${portfolio.projects[value].srcImage1}`;
        portfolio.slideshowImage2[0].src = `${portfolio.projects[value].srcImage2}`;
        portfolio.skillsList[0].innerHTML = `${portfolio.projects[value].skillsHTML}`
        portfolio.projectTitle[0].textContent = `${portfolio.projects[value].title}`
    }

    nextButton[0].addEventListener('click', function(event) {
        
        // console.log(index)
        if (index === portfolio.projects.length - 1) {
            index = 0;
            changeImage(index);
        } else {
            index++;
            changeImage(index);
        }
    })
}


portfolio.init = () => {
    // Listen for Form Submission
    portfolio.startEventListener()
    // cleanUrl()
}

portfolio.init();