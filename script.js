const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamburger.classList.toggle("active");
})


const modal = document.getElementById("modal")
const openModalBtn = document.getElementById("openModal")
const closeModalBtn = document.querySelector(".close")

openModalBtn.addEventListener("click", () => {
    modal.classList.add("show");
    document.body.classList.add("modal-opened");
})

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.classList.remove("modal-opened")
})