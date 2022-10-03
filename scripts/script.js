// JavaScript Document
const menuButton = document.querySelector("nav > button");

menuButton.addEventListener("click", openMenu)

function openMenu(){
    const deNav = document.querySelector("nav")

    deNav.classList.toggle("toonMenu");

}