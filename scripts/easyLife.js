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
            }, 300);
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
            }, 300)
        }
        
    })
}


const hoverMore = (el) =>{
    el.children[0].children[1].classList.add("zoom")
}

const hoverLess = (el) =>{
    el.children[0].children[0].children[1].classList.add("zoom")
}

const removeMore = (el)=>{
    el.children[0].children[1].classList.remove("zoom")
}

const removeLess = (el)=>{
    el.children[0].children[0].children[1].classList.remove("zoom")
}



// Mobile animations
let scrollElem = document.querySelector(".scroll-container")
let currIndex = 0
// let elemWidth = scrollElem.offsetWidth
let elemWidth = window.innerWidth
console.log(elemWidth)

// 405

const scrollRight =()=>{
    if(currIndex < 2){
        currIndex++
        let distance = (elemWidth * currIndex) - 50
        console.log(distance)
        scrollElem.scrollTo({
            left:distance,
            behaviour:"smooth"
        })
    }
}

const scrollLeft1 =()=>{
    if(currIndex >= 1) {
        currIndex--
        
        let distance = (elemWidth * currIndex) - 50
        console.log(distance)
        scrollElem.scrollTo({
            left:distance,
            behaviour:"smooth"
        })
    }
}