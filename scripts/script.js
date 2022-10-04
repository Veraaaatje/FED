// JavaScript Document
const openButton = document.querySelector("header button");

openButton.addEventListener("click", openMenu);

function openMenu() {
    const deNav = document.querySelector("nav");

    deNav.classList.add("toonMenu");

}