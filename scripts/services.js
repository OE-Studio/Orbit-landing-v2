const servicesArr = [
    {
        icon:"../assets/icons/blue_phone.svg",
        title:"Airtime",
        text:"Keep the conversation going at affordable rates on your network of choice."
    },
    {
        icon:"../assets/icons/internet.svg",
        title:"Data",
        text:"Stay connected to the people and things that matter with the data plan that’s right for you."
    },
    {
        icon:"../assets/icons/thunder.svg",
        title:"Utilities",
        text:"Settle electricity bills faster to stay connected to the grid."
    },
    {
        icon:"../assets/icons/cable.svg",
        title:"Cable subscription",
        text:"Stay entertained with on-the-go subscription to your streaming platform."
    },
    {
        icon:"../assets/icons/transfer.svg",
        title:"Transfers to Orbiters",
        text:"Share love and make your orbit fun with transfers to friends and family."
    },
    {
        icon:"../assets/icons/bank.svg",
        title:"Bank transfers",
        text:"Make inter-bank transfers with lightning speed and peace of mind."
    },
]


let services = document.querySelector('.services')

for(let i= 0; i< servicesArr.length; i++){
    let container = document.createElement("DIV")
    container.setAttribute("data-aos", "fade-up")
    container.classList.add(`box-${i}`)
    container.style.backgroundColor = "#111111"
    container.style.borderRadius = "16px"
    container.style.padding = "24px"

    // TextContainer
    let textContainer = document.createElement("DIV")
    textContainer.style.marginTop = "22.8px"

    // title
    let title = document.createElement("p")
    title.textContent = servicesArr[i].title
    title.style.color = "#767676"
    title.classList.add("geist", "font-semibold")
    // Text
    let text = document.createElement("p")
    text.textContent = servicesArr[i].text
    text.style.color="#A3A3A3"
    text.style.marginTop = "16px"
    text.style.fontSize="14px"
    text.classList.add("font-semibold")
    // icon
    let icon = document.createElement("IMG")
    icon.src = servicesArr[i].icon
    icon.style.width="40px"
    icon.alt=servicesArr[i].title

    container.appendChild(icon)
    textContainer.appendChild(title)
    textContainer.appendChild(text)
    container.appendChild(textContainer)

    services.appendChild(container)
}