let elems = document.querySelectorAll('.disappear')

const showMore=(index)=>{
    let elems = document.querySelectorAll('.disappear')
    // console.log(elems)
    
    Array.from(elems).map((elem, i)=>{
        // console.log(index)
        elem.classList.remove("appear")

        if ( i === index) {
            elem.classList.add("appear")
        }
        return false
    })
}


const showLess = (e) =>{
    // e.stopPropagation()
    // console.log(e)
    // e.currentTarget.classList.remove('appear')
    Array.from(elems).map((elem, i)=>{
        // console.log(index)
        elem.classList.remove("appear")

        
    })
}