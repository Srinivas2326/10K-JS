let friends = [];

let heading = document.createElement("h1");
heading.textContent = "Task Management";
document.body.appendChild(heading);

let userInput = document.createElement("input");
userInput.id = "input";
document.body.appendChild(userInput);

let addBtn = document.createElement("button");
addBtn.textContent = "Add";
addBtn.classList = "btn";
document.body.appendChild(addBtn);

let container = document.createElement("div");
document.body.appendChild(container);

function renderList() {
    container.innerHTML = "";
    let ul = document.createElement("ul");

    for (let eachName of friends) {
        let li = document.createElement("li");
        li.textContent = eachName + " ";

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => {
            friends.splice(friends.indexOf(eachName), 1); // Remove from array
            renderList(); // Re-render
        };

        li.appendChild(deleteBtn);
        ul.appendChild(li);
    }

    container.appendChild(ul);
}

addBtn.onclick = () => {
    let currentName = document.getElementById("input").value.trim();
    if (currentName) {
        friends.push(currentName);
        console.log(friends);
        document.getElementById("input").value = "";
        renderList();
    }
};
