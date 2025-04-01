const hamburger = document.getElementById("hamburger-menu");
const nav = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamburger.classList.toggle("active");
    })