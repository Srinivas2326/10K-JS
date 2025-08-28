const countDownInput = document.getElementById("input");
const startButton = document.getElementById("countDown");
const stopButton = document.getElementById("stopBtn");
const resetButton = document.getElementById("resetBtn");
const timerDisplay = document.getElementById("timerDisplay");

let myCountDown;
let seconds;   
let initialSeconds;

startButton.addEventListener("click", (e) => {
    e.preventDefault();

    clearInterval(myCountDown);

    seconds = parseInt(countDownInput.value);
    initialSeconds = seconds;

    if (isNaN(seconds) || seconds <= 0) {
        timerDisplay.textContent = "Enter a valid positive number";
        return;
    }

    updateDisplay(seconds);

    myCountDown = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(myCountDown);
            timerDisplay.textContent = "Time is Up";
        } else {
            seconds--;
            updateDisplay(seconds);
        }
    }, 1000);
});

stopButton.addEventListener("click", () => {
    clearInterval(myCountDown);
    timerDisplay.textContent = "Stopped";
});

resetButton.addEventListener("click", () => {
    clearInterval(myCountDown);
    seconds = initialSeconds;
    if (!isNaN(seconds) && seconds > 0) {
        updateDisplay(seconds);
    } else {
        timerDisplay.textContent = "00:00";
    }
});

function updateDisplay(sec) {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    timerDisplay.textContent =
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
}
