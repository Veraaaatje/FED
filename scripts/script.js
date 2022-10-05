// Openen van menu
const openButton = document.querySelector("header button");

openButton.addEventListener("click", openMenu);

function openMenu() {
    const deNav = document.querySelector("nav");

    deNav.classList.add("toonMenu");

}

// Sluiten van menu
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


// animatie
const vliegtuigButton = document.querySelector("section:nth-of-type(1) p");
const vliegtuigImg = document.querySelector("main > img");
const audio = document.querySelector("main > audio");

vliegtuigButton.addEventListener("click", function () {
    if (vliegtuigImg.classList.contains("hidden")){
        vliegtuigImg.classList.remove("hidden");
        audio.play();
    } else {
        vliegtuigImg.classList.add("hidden");
        audio.pause();
        audio.currentTime = 0;
    }
})

