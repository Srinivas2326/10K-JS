
let h1 = document.createElement("h1")
h1.innerText = "Snake and Ladder"
h1.classList = "heading"
// document.body.appendChild(h1)
document.querySelector("body").appendChild(h1)


let container = document.createElement("div")
container.classList = "container"
document.body.appendChild(container)

for (i=100; i>=1; i--){
    let divContainer = document.createElement("div")
    divContainer.classList="cell"
    divContainer.id = `cell${i}`
    divContainer.textContent=i
    container.appendChild(divContainer)
}


let players = [{name: "srinivas",color:"blue", score:0}, {name: "shekar", color:"red", score:0}, {name:"tharun", color:"green", score:0},{name:"hemanth", color:"yellow", score:0}]
for(let i=0; i<=3; i++){
    let btn = document.createElement("button")
    btn.classList="player-btn"
    btn.textContent = players[i].name +" " + players[i].score
    btn.style.backgroundColor=players[i].color
    document.body.appendChild(btn)
    btn.onclick=function(){
        let randomNumber = Math.random()*6
        randomNumber = Math.ceil(randomNumber)
        let currentPerson = document.getElementById(`person${players[i].score}`)
        if (currentPerson){
            currentPerson.parentNode.removeChild(currentPerson)
        }
        

        if (players[i].score + randomNumber <=100){
            players[i].score =players[i].score + randomNumber
        }
        btn.textContent = players[i].name +" " + players[i].score



        let person = document.createElement("div")
        person.classList="person"
        person.id = `person${players[i].score}`
        person.style.backgroundColor=players[i].color
        let parentElement = document.getElementById(`cell${players[i].score}`)
        parentElement.appendChild(person)

    }
    document.body.appendChild(btn)
}


