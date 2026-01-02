
// imports
import "./styles.css"

import { homeTab } from "./home.js"
import { menuTab } from "./menu.js"
import { aboutTab } from "./about.js"

// implementation
console.log("Welcome to the restaurant page")
homeTab() // load "  Home page   " initially

let lis = document.querySelectorAll("li")

lis.forEach((li) => {
    if (li.classList.contains("home-tab")) {
        li.addEventListener("click", homeTab);
    } else if (li.classList.contains("menu-tab")) {
        li.addEventListener("click", menuTab);
    } else if (li.classList.contains("about-tab")) {
        li.addEventListener("click", aboutTab);
    }
});




// -------------- EXTRAS --------------

// let home = document.querySelector(".home-tab")
// let menu = document.querySelector(".menu-tab")
// let about = document.querySelector(".about-tab")

// home.addEventListener("click", () => {
//     homeTab()
// })

// menu.addEventListener("click", () => {
//     menuTab()
// })

// about.addEventListener("click", () => {
//     aboutTab()
// })