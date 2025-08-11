let lights = ["red", "yellow", "green"];
let currentIndex = 0;
let intervalId = null;

function showLight(index) {
    lights.forEach(light => {
        document.getElementById(light).classList.remove("active");
    });
    document.getElementById(lights[index]).classList.add("active");
}

function startTrafficLight() {
    if (intervalId) return; // Prevent multiple intervals

    showLight(currentIndex);
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % lights.length;
        showLight(currentIndex);
    }, 2000); // Change every 2 seconds
}

function stopTrafficLight() {
    clearInterval(intervalId);
    intervalId = null;
}

document.getElementById("startBtn").addEventListener("click", startTrafficLight);
document.getElementById("stopBtn").addEventListener("click", stopTrafficLight);
