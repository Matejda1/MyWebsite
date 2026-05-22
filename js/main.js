const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".navbar-links")
let menuOpen = false

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("change")
    if (menuOpen == false) {
        navbar.style.display = "block"
        menuOpen = true
    } else if (menuOpen == true) {
        navbar.style.display = "none"
        menuOpen = false
    }
})