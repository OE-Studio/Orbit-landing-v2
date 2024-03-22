let conts = document.querySelectorAll(".change")
let iPhone = document.querySelector(".iphone")

window.addEventListener('scroll', ()=>{
    Array.from(conts).forEach((elem, i)=>{
        let elemTop = elem.offsetTop - 140

        if(window.scrollY > elemTop){
            iPhone.src = `/assets/images/Mockup${i}.png`
        }
    })
})