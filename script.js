const intro = document.querySelector(".intro");
const main = document.querySelector("main");
const aboutMeBtn = document.querySelector(".about-me-btn");
const aboutMeSection = document.querySelector(".about-me");
const hobbiesBtn = document.querySelector(".hobbies-btn");
const hobbiesSection = document.querySelector(".hobbies");
const skillsBtn = document.querySelector(".skills-btn");
const skillsSection = document.querySelector(".skills");
const projectsBtn = document.querySelector(".projects-btn");
const projectsSection = document.querySelector(".projects");
const closeSectionBtns = document.querySelectorAll(".close-section-btn");
const skillsBtns = document.querySelectorAll(".skill i");

const updateTime = () => {
  const startDate = new Date("6/7/2022");
  const now = new Date();
  const diffTime = Math.abs(now - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  document.querySelector(".counter").innerHTML = diffDays;
  setTimeout(() => {
    updateTime();
  }, 1000);
};

updateTime();

const toggleMain = () => {
  main.classList.toggle("hidden");
};

intro.addEventListener("click", () => {
  intro.querySelector(".top").classList.add("slide-top");
  intro.querySelector(".bottom").classList.add("slide-bottom");
  setTimeout(() => {
    intro.style.display = "none";
  }, 300);
});

const openSection = (e, section) => {
  const targetCover = e.target;
  targetCover.querySelector(".cover").classList.add("cover-page");
  setTimeout(() => {
    toggleMain();
    targetCover.querySelector(".cover").classList.remove("cover-page");
    section.style.display = "flex";
  }, 1000);
};

aboutMeBtn.addEventListener("click", (e) => {
  openSection(e, aboutMeSection);
});

hobbiesBtn.addEventListener("click", (e) => {
  openSection(e, hobbiesSection);
});

skillsBtn.addEventListener("click", (e) => {
  openSection(e, skillsSection);
});

projectsBtn.addEventListener("click", (e) => {
  openSection(e, projectsSection);
});

closeSectionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const targetSection = e.target.closest("section");
    targetSection.classList.add("slide-wide");
    toggleMain();
    setTimeout(() => {
      targetSection.style.display = "none";
      targetSection.classList.remove("slide-wide");
    }, 2000);
  });
});

document.querySelectorAll(".flip-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    e.target.closest(".flip-card-inner").classList.toggle("rotated");
  });
});


skillsBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.target.nextElementSibling);
    e.target.nextElementSibling.style.display = 'block';
  });
});