let burger = document.querySelector(".burger")
let line1 = document.querySelector(".line1")
let line2 = document.querySelector(".line2")
let line3 = document.querySelector(".line3")
let navLinks = document.querySelector(".nav-links")

console.log("yes")

burger.addEventListener("click", ()=>{
    line1.classList.toggle("animate-line1")
    line2.classList.toggle("hidden")
    line3.classList.toggle("animate-line3")

    navLinks.classList.toggle("hidden")
})