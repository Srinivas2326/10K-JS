const head = document.getElementById("h")
const tail = document.getElementById("t")
const flipBtn = document.getElementById("flip-btn")


flipBtn.addEventListener("click", ()=>{
    let flip = (Math.floor(Math.random()*50) + 50) * 180 

    head.style.transform = `rotateX(${flip}deg)`
    tail.style.transform = `rotateX(${flip}deg)`
})