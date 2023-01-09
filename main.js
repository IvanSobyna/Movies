let container = document.querySelector(".container");
let signUp = document.querySelector(".text-new");
let sign = document.querySelector(".Signup");
let loginBtn = document.querySelector(".text-login");
let title = document.querySelector(".title");
let signIn = document.querySelector(".signIn");
let forms = document.querySelector(".forms");
let formSignup = document.querySelector(".second");


signUp.addEventListener("click", () => {
    container.classList.add("active");
    sign.classList.add("active");
})
loginBtn.addEventListener("click", () => {
    sign.classList.remove("active");
    container.classList.remove("active");
})
signIn.addEventListener("click", () => {
    forms.classList.add("active");
})
formSignup.addEventListener("click", () => {
    forms.classList.remove("active");
    sign.classList.remove("active");
    formSignup.classList.remove("active");
})
title.addEventListener("click", () => {
    forms.classList.remove("active");
})





const menuButton = document.querySelector(".menu");
const menuBody = document.querySelector(".menu-body");
const closeButton = document.querySelector(".closeBtn");
const body = document.querySelector("body");


menuButton.addEventListener("click", ()=> {
    menuBody.classList.add("reveal");
    menuButton.classList.add("hidden");
    body.classList.add("lock");
})

closeButton.addEventListener("click", ()=> {
    menuBody.classList.remove("reveal");
    menuButton.classList.remove("hidden");
    body.classList.remove("lock");
})

const arrowRight = document.querySelector(".arrowRight");
const arrowLeft = document.querySelector(".arrowLeft");
const slideShow = document.querySelector(".slideShow");
const slideInto2 = document.querySelector(".slideInto2");
const slideInto = document.querySelector(".slideInto");

arrowRight.addEventListener("click", () => {
    // slideShow.classList.add("active");
    slideInto2.classList.add("active");
    slideInto.classList.add("active");
})

arrowLeft.addEventListener("click", () => {
    slideInto2.classList.remove("active");
    slideInto.classList.remove("active");
})