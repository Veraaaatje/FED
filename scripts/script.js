// JavaScript Document
const openButton = document.querySelector("header button");

openButton.addEventListener("click", openMenu);

function openMenu() {
    const deNav = document.querySelector("nav");

    deNav.classList.add("toonMenu");

}




// const topping_1 = document.querySelector('.topping_1');

// deNav.addEventListener('click', function () {
//     if (topping_1.classList.contains("hidden")) {
//         topping_1.classList.remove("hidden");
//     } else {
//         topping_1.classList.add("hidden");
//     }
// })