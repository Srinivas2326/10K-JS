let gameArea = document.createElement("div");
gameArea.classList = "game-area";
document.body.appendChild(gameArea);

let h1 = document.createElement("h1");
h1.innerText = "Snake and Ladder";
h1.classList = "heading";
document.body.insertBefore(h1, gameArea);

let container = document.createElement("div");
container.classList = "container";
gameArea.appendChild(container);

let playersPanel = document.createElement("div");
playersPanel.classList = "players";
gameArea.appendChild(playersPanel);

for (let i = 100; i >= 1; i--) {
    let divContainer = document.createElement("div");
    divContainer.classList = "cell";
    divContainer.id = `cell${i}`;
    divContainer.textContent = i;
    container.appendChild(divContainer);
}

let players = [
    { name: "srinivas", color: "blue", score: 0 },
    { name: "shekar", color: "red", score: 0 },
    { name: "tharun", color: "green", score: 0 },
    { name: "hemanth", color: "yellow", score: 0 }
];

for (let i = 0; i < players.length; i++) {
    let btn = document.createElement("button");
    btn.classList = "player-btn";
    btn.textContent = players[i].name + " " + players[i].score;
    btn.style.backgroundColor = players[i].color;

    btn.onclick = function () {
        let randomNumber = Math.ceil(Math.random() * 6);

        let currentPerson = document.getElementById(`person${players[i].name}`);
        if (currentPerson) {
            currentPerson.parentNode.removeChild(currentPerson);
        }

        if (players[i].score + randomNumber <= 100) {
            players[i].score += randomNumber;
        }
        btn.textContent = players[i].name + " " + players[i].score;

        let person = document.createElement("div");
        person.classList = "person";
        person.id = `person${players[i].name}`;
        person.style.backgroundColor = players[i].color;
        let parentElement = document.getElementById(`cell${players[i].score}`);
        parentElement.appendChild(person);
    };

    playersPanel.appendChild(btn);
}
