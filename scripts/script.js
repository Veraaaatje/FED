// JavaScript Document
const openButton = document.querySelector("header button");

openButton.addEventListener("click", openMenu);

function openMenu() {
    const deNav = document.querySelector("nav");

    deNav.classList.add("toonMenu");

}

const sluitButton = document.querySelector("nav div svg");

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
}

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}
