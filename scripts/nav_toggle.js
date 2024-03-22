let burger = document.querySelector(".burger")
let line1 = document.querySelector(".line1")
let line2 = document.querySelector(".line2")
let line3 = document.querySelector(".line3")
let navLinks = document.querySelector(".nav-links")

const toggleNav = () =>{
    line1.classList.toggle("animate-line1")
    line2.classList.toggle("hidden")
    line3.classList.toggle("animate-line3")

    navLinks.classList.toggle("hidden")
    navLinks.classList.toggle("flex")
}



let dButton = document.querySelectorAll(".download")
let qrCode = document.querySelectorAll(".qrCode")

const download = (index) =>{
    console.log(navigator.userAgent)
    let device
    if (/iPad|iPhone|Mac|AppleWebKit|iPod/.test(navigator.userAgent)) {
        device = "ios"
    } else {
        device="android"
    }
    Array.from(dButton).map((b, i)=>{
        if(index === i){
            if(window.innerWidth > 500){
                b.parentNode.children[1].classList.toggle("hidden")
                b.parentNode.children[0].classList.toggle("hidden")
                b.parentNode.children[1].classList.toggle("flex")
            }
            else {
                if(device==="ios"){
                    window.location.href = "https://www.applestore.com"
                }
                else{
                    window.location.href="https://www.playstore.com"
                }
            }
        }
    })

    
}