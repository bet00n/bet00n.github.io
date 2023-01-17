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
const closeSectionBtns = document.querySelectorAll('.close-section-btn');


const toggleMain = () => {
    main.classList.toggle('hidden');
}

intro.addEventListener('click',() => {
    intro.querySelector('.top').classList.add('slide-top');
    intro.querySelector('.bottom').classList.add('slide-bottom');
    setTimeout(() => {
        intro.style.display = 'none';
    }, 300);
})

const openSection = (e, section) => {
    const targetCover = e.target;
    console.log(targetCover);
    targetCover.querySelector('.cover').classList.add('cover-page');
    setTimeout(() => {
        toggleMain();
        targetCover.querySelector('.cover').classList.remove('cover-page');
        section.style.display = 'block';
    }, 1000)
}

aboutMeBtn.addEventListener('click', (e) => {
    openSection(e, aboutMeSection);
});

hobbiesBtn.addEventListener('click', (e) => {
    openSection(e, hobbiesSection);
})

skillsBtn.addEventListener('click', (e) => {
    openSection(e, skillsSection);
})

projectsBtn.addEventListener('click', (e) => {
    openSection(e, projectsSection);
})

closeSectionBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const targetSection = e.target.closest('section');
        console.log(targetSection);
        targetSection.classList.add('slide-wide');
        toggleMain();
        setTimeout(() => {
            targetSection.style.display = 'none';
            targetSection.classList.remove('slide-wide');
        },2000);
    })
})