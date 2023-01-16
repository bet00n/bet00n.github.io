const intro = document.querySelector('.intro');
const main = document.querySelector('main');
const aboutMeBtn = document.querySelector('.about-me-btn');
const aboutMeSection = document.querySelector('.about-me');
const hobbiesBtn = document.querySelector('.hobbies-btn');
const hobbiesSection = document.querySelector('.hobbies');
const skillsBtn = document.querySelector('.skills-btn');
const skillsSection = document.querySelector('.skills');
const projectsBtn = document.querySelector('.projects-btn');
const projectsSection = document.querySelector('.projects');


intro.addEventListener('click',() => {
    intro.querySelector('.top').classList.add('slide-top');
    intro.querySelector('.bottom').classList.add('slide-bottom');
    setTimeout(() => {
        intro.style.display = 'none';
    }, 300);
})

const coverPage = (e, section) => {
    const targetCover = e.target;
    console.log(targetCover);
    targetCover.querySelector('.cover').classList.add('cover-page');
    setTimeout(() => {
        main.style.display = 'none';
        targetCover.querySelector('.cover').classList.remove('cover-page');
        section.style.display = 'block';
    }, 1000)
}

aboutMeBtn.addEventListener('click', (e) => {
    coverPage(e, aboutMeSection);
});

hobbiesBtn.addEventListener('click', (e) => {
    coverPage(e, hobbiesSection);
})

skillsBtn.addEventListener('click', (e) => {
    coverPage(e, skillsSection);
})

projectsBtn.addEventListener('click', (e) => {
    coverPage(e, projectsSection);
})