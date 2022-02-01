const scrollUp = document.querySelector('#scroll-up');
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");
const bgmusic = document.getElementById("bg-music");
bgmusic.volume = 0.08;

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

document.body.scrollTop = document.documentElement.scrollTop = 0;

window.onscroll = function() {
  ul.classList.remove("show");
}

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
