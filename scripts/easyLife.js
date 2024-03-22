let elems = document.querySelectorAll('.disappear')
const appearingCard = document.querySelectorAll(".appearingCard")
const disappearingCard = document.querySelectorAll(".disappearingCard")

const showMore=(index)=>{
    let elems = document.querySelectorAll('.disappear')
    // console.log(elems)
    
    Array.from(elems).map((elem, i)=>{
        // console.log(index)

        if ( i === index) {
            elem.classList.remove("appear")

            disappearingCard[i].children[1].classList.remove("fadeUp")
            disappearingCard[i].children[0].children[0].classList.remove("fadeUp")

            disappearingCard[i].children[1].classList.add("fadeDown")
            disappearingCard[i].children[0].children[0].classList.add("fadeDown")

            appearingCard[i].children[1].classList.remove("fadeDown")
            appearingCard[i].children[0].children[0].children[0].classList.remove("fadeDown")
            appearingCard[i].children[0].children[1].classList.remove("fadeDown")

            setTimeout(() => {
                elem.classList.add("appear")
                appearingCard[i].children[1].classList.add("fadeUp")
                appearingCard[i].children[0].children[0].children[0].classList.add("fadeUp")
                appearingCard[i].children[0].children[1].classList.add("fadeUp")
            }, 1000);
        }
        return false
    })
}


const showLess = (index) =>{
    // e.stopPropagation()
    // console.log(e)
    // e.currentTarget.classList.remove('appear')
    Array.from(elems).map((elem, i)=>{
        if(i === index){
            appearingCard[i].children[1].classList.remove("fadeUp")
            appearingCard[i].children[0].children[0].children[0].classList.remove("fadeUp")
            appearingCard[i].children[0].children[1].classList.remove("fadeUp")

            
            appearingCard[i].children[1].classList.add("fadeDown")
            appearingCard[i].children[0].children[0].children[0].classList.add("fadeDown")
            appearingCard[i].children[0].children[1].classList.add("fadeDown")

            disappearingCard[i].children[1].classList.remove("fadeDown")
            disappearingCard[i].children[0].children[0].classList.remove("fadeDown")

            setTimeout(()=>{
                elem.classList.remove("appear")
                disappearingCard[i].children[1].classList.add("fadeUp")
                disappearingCard[i].children[0].children[0].classList.add("fadeUp")
            }, 1000)
        }
        
    })
}