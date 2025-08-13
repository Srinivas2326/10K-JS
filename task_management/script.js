friends = []

let heading = document.createElement("h1")
heading.textContent = "Task Management"
document.body.appendChild(heading)

let userInput = document.createElement("input")
userInput.id = "input"
document.body.appendChild(userInput)



let addBtn = document.createElement("button")
addBtn.textContent = "Add"
addBtn.classList = "btn"
addBtn.onclick = ()=>{
    let currentName = document.getElementById("input").value
    friends.push(currentName)
    console.log(friends)
    document.getElementById("input").value=""
    container.innerHTML=""

    for(let eachName of friends){
    let friend = document.createElement("li")
    friend.textContent = eachName + " " +  "delete" 

    friend.onclick=()=>{
        friend.splice(friends.indexOf(eachName),1)
        container.innerHTML=""
        // for(let eachName of friend){
        //     let friend = document.createElement("li")
        //     friend.textContent = eachName + " " + "delete"
        // }
    }

    container.appendChild(friend)
}

}
document.body.appendChild(addBtn)


let container = document.createElement("div")

document.body.appendChild(container)